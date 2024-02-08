import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/database/schema.ts',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './src/database/bookmarks.db'
  },
  verbose: true,
  strict: true,
});
