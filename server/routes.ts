import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { InsertContact, InsertVisitor, AdminLogin } from "@shared/schema";
import { z } from "zod";

// Validation schemas
const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const insertVisitorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Please enter a valid email address")
});

const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

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