import { relations } from 'drizzle-orm';
import {
  date,
  foreignKey,
  integer,
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  email: varchar('email'),
  hash: varchar('hash'),

  createdAt: date('created_at').defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
  bookmarks: many(bookmarks),
}));

export const bookmarks = pgTable('bookmarks', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  description: varchar('description'),
  link: varchar('link'),

  userId: integer('user_id').notNull(),
});

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, { fields: [bookmarks.userId], references: [users.id] }),
}));
