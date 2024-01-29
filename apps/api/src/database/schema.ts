import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  email: varchar('email').unique().notNull(),
  hash: varchar('hash'),

  createdAt: date('created_at').defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
  bookmarks: many(bookmarks),
  userRoles: many(userRoles),
}));

export const roles = pgTable('roles', {
  id: serial('id').primaryKey(),
  description: varchar('description').notNull(),
});

export const userRoles = pgTable(
  'user_roles',
  {
    userId: integer('user_id')
      .notNull()
      .references(() => users.id),
    roleId: integer('role_id')
      .notNull()
      .references(() => roles.id),
  },
  (table) => ({ pk: primaryKey({ columns: [table.userId, table.roleId] }) }),
);

export const userRolesRelations = relations(userRoles, ({ one }) => ({
  user: one(users, { fields: [userRoles.userId], references: [users.id] }),
  role: one(roles, { fields: [userRoles.roleId], references: [roles.id] }),
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
