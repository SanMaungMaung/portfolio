import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

// Visitor schema for form validation
export const insertVisitorSchema = createInsertSchema(visitors).pick({
  name: true,
  company: true,
  position: true,
  email: true
}).extend({
  email: z.string().email("Please enter a valid email address")
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true, 
  message: true
}).extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type Visitor = typeof visitors.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;