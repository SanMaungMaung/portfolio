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

// Export a single instance to be used throughout the application
export const storage = new DatabaseStorage();