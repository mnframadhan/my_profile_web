import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './server/db/schema/*',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});