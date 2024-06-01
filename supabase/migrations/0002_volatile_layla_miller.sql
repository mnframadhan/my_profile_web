ALTER TABLE "message" RENAME COLUMN "nama_lengkap" TO "name";--> statement-breakpoint
ALTER TABLE "message" RENAME COLUMN "display_name" TO "message";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx" ON "message" USING btree (id);