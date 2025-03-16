import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { InsertContact } from '@shared/schema';
import { storage } from '../server/storage';
import { z } from "zod";

const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = insertContactSchema.parse(req.body);
    const message = await storage.createMessage(data);
    return res.status(200).json(message);
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(400).json({ error: 'Invalid contact form data' });
  }
}
