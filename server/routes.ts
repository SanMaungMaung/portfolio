import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertVisitorSchema, adminLoginSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const credentials = adminLoginSchema.parse(req.body);
      const admin = await storage.validateAdmin(credentials);

      if (admin) {
        // Store admin session
        req.session.adminId = admin.id;
        res.json({ success: true });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid login data" });
    }
  });

  app.get("/api/admin/visitors", async (req, res) => {
    // Check if admin is logged in
    if (!req.session.adminId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const visitors = await storage.getVisitors();
    res.json(visitors);
  });

  app.get("/api/admin/messages", async (req, res) => {
    // Check if admin is logged in
    if (!req.session.adminId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const messages = await storage.getMessages();
    res.json(messages);
  });

  app.post("/api/admin/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  });

  // Existing routes
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  app.post("/api/visitors", async (req, res) => {
    try {
      const data = insertVisitorSchema.parse(req.body);
      const visitor = await storage.createVisitor(data);
      res.json(visitor);
    } catch (error) {
      res.status(400).json({ error: "Invalid visitor data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}