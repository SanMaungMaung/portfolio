import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Determine the static files directory based on environment
const staticDir = process.env.NODE_ENV === 'production' 
  ? path.join(process.cwd(), 'dist', 'public')
  : path.join(process.cwd(), 'public');

// Serve static files with proper caching headers
const serveStaticWithCache = (route: string, dir: string) => {
  app.use(route, express.static(path.join(staticDir, dir), {
    maxAge: '1d', // Cache for 1 day
    etag: true,
    lastModified: true,
    fallthrough: true
  }));
};

// Configure static file serving with proper caching
serveStaticWithCache('/images', 'images');
serveStaticWithCache('/certificates', 'certificates');

// General static file serving
app.use(express.static(staticDir, {
  etag: true,
  lastModified: true
}));

// Add session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key', // Fallback for development
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// Simplified logging middleware
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    const start = Date.now();
    res.on("finish", () => {
      const duration = Date.now() - start;
      log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
    });
  }
  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();