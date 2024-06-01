CREATE TABLE IF NOT EXISTS "user_profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama_lengkap" text NOT NULL,
	"display_name" text NOT NULL,
	"created_at" date DEFAULT now()
);
