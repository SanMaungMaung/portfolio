import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { InsertVisitor } from '@shared/schema';
import { storage } from '../server/storage';
import { z } from "zod";

const insertVisitorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Please enter a valid email address")
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = insertVisitorSchema.parse(req.body);
    const visitor = await storage.createVisitor(data);
    return res.status(200).json(visitor);
  } catch (error) {
    console.error('Visitor API Error:', error);
    return res.status(400).json({ error: 'Invalid visitor data' });
  }
}
