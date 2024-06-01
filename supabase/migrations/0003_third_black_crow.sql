CREATE TABLE IF NOT EXISTS "request_comp" (
	"id" serial PRIMARY KEY NOT NULL,
	"nama_perusahaan" text NOT NULL,
	"bidang" text NOT NULL,
	"no_wa" text NOT NULL,
	"created_at" date DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_comp" ON "request_comp" USING btree (id);