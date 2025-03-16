import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Visitors table
export const visitors = pgTable('visitors', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company').notNull(),
  position: text('position').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Contact messages table
export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Admin users table
export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

// Zod schemas for validation
export const insertVisitorSchema = createInsertSchema(visitors).omit({ id: true, createdAt: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertAdminSchema = createInsertSchema(admins).omit({ id: true, createdAt: true });

// Types
export type Visitor = typeof visitors.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type Admin = typeof admins.$inferSelect;

export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type InsertAdmin = z.infer<typeof insertAdminSchema>;
