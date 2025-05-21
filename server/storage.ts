import { db } from "./db";
import { eq } from "drizzle-orm";
import { visitors, messages, admins } from "./schema";
import type { Admin, AdminLogin, Visitor, InsertVisitor, ContactMessage, InsertContact } from "@shared/schema";

export interface IStorage {
  createVisitor(visitor: InsertVisitor): Promise<Visitor>;
  createMessage(message: InsertContact): Promise<ContactMessage>;
  getVisitors(): Promise<Visitor[]>;
  getMessages(): Promise<ContactMessage[]>;
  validateAdmin(credentials: AdminLogin): Promise<Admin | null>;
}

export class DatabaseStorage implements IStorage {
  async createVisitor(insertVisitor: InsertVisitor): Promise<Visitor> {
    const [visitor] = await db
      .insert(visitors)
      .values(insertVisitor)
      .returning();
    return visitor;
  }

  async createMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getVisitors(): Promise<Visitor[]> {
    return await db.select().from(visitors).orderBy(visitors.createdAt);
  }

  async getMessages(): Promise<ContactMessage[]> {
    return await db.select().from(messages).orderBy(messages.createdAt);
  }

  async validateAdmin(credentials: AdminLogin): Promise<Admin | null> {
    const [admin] = await db
      .select()
      .from(admins)
      .where(eq(admins.username, credentials.username));

    if (admin && admin.password === credentials.password) {
      return admin;
    }
    return null;
  }
}

// Types are already imported above


export class MemStorage implements IStorage {
  private visitors: Map<number, Visitor>;
  private messages: Map<number, ContactMessage>;
  private admins: Map<number, Admin>;
  private visitorId: number;
  private messageId: number;

  constructor() {
    this.visitors = new Map();
    this.messages = new Map();
    this.admins = new Map();
    this.visitorId = 1;
    this.messageId = 1;

    // Initialize with a default admin account
    this.admins.set(1, {
      id: 1,
      username: 'admin',
      password: 'admin123' // This should be hashed in production
    });
  }

  async validateAdmin(credentials: AdminLogin): Promise<Admin | null> {
    const admin = Array.from(this.admins.values()).find(
      admin => admin.username === credentials.username && 
               admin.password === credentials.password
    );
    return admin || null;
  }

  async getVisitors(): Promise<Visitor[]> {
    return Array.from(this.visitors.values());
  }

  async getMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }

  async createVisitor(insertVisitor: InsertVisitor): Promise<Visitor> {
    const id = this.visitorId++;
    const visitor: Visitor = {
      ...insertVisitor,
      id,
      createdAt: new Date()
    };
    this.visitors.set(id, visitor);
    return visitor;
  }

  async createMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const id = this.messageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();