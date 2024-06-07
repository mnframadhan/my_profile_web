import { date, serial, pgTable, text, index } from "drizzle-orm/pg-core";

import { createInsertSchema, createSelectSchema} from "drizzle-zod"
import { z } from "zod"

export const requestComp = pgTable('request_comp', {
    id: serial('id').primaryKey(),
    nama_perusahaan: text('nama_perusahaan').notNull(),
    bidang: text('bidang').notNull(),
    no_wa: text('no_wa').notNull(),
    created_at: date('created_at').defaultNow()
    
}, (requestComp) => {
    return {
        messageIdIndex : index('idx_comp').on(requestComp.id)
    }
})

export const insertRequestCompSchema = createInsertSchema(requestComp, {
    nama_perusahaan: z
        .string()
        .min(2, {message: "Terlalu sedikit karakter"})
        .max(100, {message: "Terlalu banyak karakter"}),
    bidang: z
        .string()
        .min(2, {message: "Terlalu sedikit karakter"})
        .max(100, {message: "Terlalu banyak karakter"}),
    no_wa: z
        .string()
        .min(2, {message: "Terlalu sedikit karakter"})
        .max(14, {message: "Terlalu banyak karakter"}),
})

export const selectRequestCompSchema = createSelectSchema(requestComp)