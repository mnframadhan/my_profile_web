
import { date, serial, pgTable, text, index } from "drizzle-orm/pg-core";

import { createInsertSchema, createSelectSchema} from "drizzle-zod"
import { z } from "zod"

export const message = pgTable('message', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    message: text('message').notNull(),
    created_at: date('created_at').defaultNow()
    
}, (message) => {
    return {
        messageIdIndex : index('idx').on(message.id)
    }
})

export const insertMessageSchema = createInsertSchema(message, {
    name: z
        .string()
        .max(28, {message: "Terlalu banyak karakter"}),

    message: z
        .string()
        .min(10, {message: "Pesan terlalu singkat"})
        .max(500, {message: "Mencapai batas karakter" })
})

export const selectMessageSchema = createSelectSchema(message)