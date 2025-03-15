import { db } from "./db";
import { 
  visitors, contactMessages,
  type Visitor, type InsertVisitor,
  type ContactMessage, type InsertContact,
  users, type User, type InsertUser
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createVisitor(visitor: InsertVisitor): Promise<Visitor>;
  createMessage(message: InsertContact): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select("*").from(users).where({id}).returning('*');
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select("*").from(users).where({username}).returning('*');
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createVisitor(insertVisitor: InsertVisitor): Promise<Visitor> {
    const [visitor] = await db
      .insert(visitors)
      .values(insertVisitor)
      .returning();
    return visitor;
  }

  async createMessage(insertMessage: InsertContact): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage = new DatabaseStorage();