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

// Serve static files from public directory with specific paths
app.use('/images', express.static(path.join(staticDir, 'images'), {
  maxAge: '1d',
  fallthrough: true
}));

app.use('/certificates', express.static(path.join(staticDir, 'certificates'), {
  maxAge: '1d',
  fallthrough: true
}));

// General static file serving
app.use(express.static(staticDir));

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