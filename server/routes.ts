import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertVisitorSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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