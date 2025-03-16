import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { InsertContact, InsertVisitor } from '@shared/schema';
import { storage } from '../server/storage';
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method, url } = req;

  try {
    // Contact form submission
    if (method === 'POST' && url === '/api/contact') {
      const data = insertContactSchema.parse(req.body);
      const message = await storage.createMessage(data);
      return res.status(200).json(message);
    }

    // Visitor registration
    if (method === 'POST' && url === '/api/visitors') {
      const data = insertVisitorSchema.parse(req.body);
      const visitor = await storage.createVisitor(data);
      return res.status(200).json(visitor);
    }

    // Admin login
    if (method === 'POST' && url === '/api/admin/login') {
      const credentials = adminLoginSchema.parse(req.body);
      const admin = await storage.validateAdmin(credentials);
      if (admin) {
        req.session.adminId = admin.id;
        return res.status(200).json({ success: true });
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    }

    // Admin logout
    if (method === 'POST' && url === '/api/admin/logout') {
      req.session.destroy(() => {
        return res.status(200).json({ success: true });
      });
    }

    // Get visitors (admin only)
    if (method === 'GET' && url === '/api/admin/visitors') {
      if (!req.session.adminId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const visitors = await storage.getVisitors();
      return res.status(200).json(visitors);
    }

    // Get messages (admin only)
    if (method === 'GET' && url === '/api/admin/messages') {
      if (!req.session.adminId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const messages = await storage.getMessages();
      return res.status(200).json(messages);
    }

    // Not found
    return res.status(404).json({ error: 'Not Found' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}