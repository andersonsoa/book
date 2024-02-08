import { relations, sql } from 'drizzle-orm';
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id', { mode: "number"}).primaryKey({ autoIncrement: true}),
  name: text('name'),
  email: text('email').unique().notNull(),
  hash: text('hash'),

  createdAt: text('created_at').default(sql`CURRENT_DATE`),
});

export const userRelations = relations(users, ({ many }) => ({
  bookmarks: many(bookmarks),
  userRoles: many(userRoles),
}));

export const roles = sqliteTable('roles', {
  id: integer('id', { mode: "number"}).primaryKey({ autoIncrement: true }),
  description: text('description').notNull(),
});

export const userRoles = sqliteTable(
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

export const bookmarks = sqliteTable('bookmarks', {
  id: integer('id', { mode: "number"}).primaryKey({ autoIncrement: true}),
  title: text('title').notNull(),
  description: text('description'),
  link: text('link'),

  userId: integer('user_id').notNull(),
});

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, { fields: [bookmarks.userId], references: [users.id] }),
}));
