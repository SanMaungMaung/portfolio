// Type definitions without zod dependencies
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

export type InsertVisitor = Omit<Visitor, "id" | "createdAt">;
export type InsertContact = Omit<ContactMessage, "id" | "createdAt">;
export type AdminLogin = Omit<Admin, "id">;