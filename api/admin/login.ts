import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { z } from "zod";
import { sign } from 'jsonwebtoken';

const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

// Using JWT for stateless authentication instead of sessions
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const credentials = adminLoginSchema.parse(req.body);
    const admin = await storage.validateAdmin(credentials);
    
    if (admin) {
      // Generate JWT token
      const token = sign(
        { adminId: admin.id },
        process.env.JWT_SECRET || 'your-jwt-secret',
        { expiresIn: '24h' }
      );
      
      return res.status(200).json({ success: true, token });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error('Admin Login Error:', error);
    return res.status(400).json({ error: 'Invalid login data' });
  }
}
