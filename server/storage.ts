import { 
  type Visitor, type InsertVisitor,
  type ContactMessage, type InsertContact
} from "@shared/schema";

export interface IStorage {
  createVisitor(visitor: InsertVisitor): Promise<Visitor>;
  createMessage(message: InsertContact): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private visitors: Map<number, Visitor>;
  private messages: Map<number, ContactMessage>;
  private visitorId: number;
  private messageId: number;

  constructor() {
    this.visitors = new Map();
    this.messages = new Map();
    this.visitorId = 1;
    this.messageId = 1;
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