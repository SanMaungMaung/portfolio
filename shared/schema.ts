import { z } from "zod";

// Admin authentication schema
export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

// Visitor schema for form validation
export const insertVisitorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Please enter a valid email address")
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

export interface Admin {
  id: number;
  username: string;
  password: string;
}

export interface Visitor {
  id: number;
  name: string;
  company: string;
  position: string;
  email: string;
  createdAt: Date;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type AdminLogin = z.infer<typeof adminLoginSchema>;