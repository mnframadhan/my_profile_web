import { pgTable, serial, text, integer, index } from "drizzle-orm/pg-core";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";

import { z } from "zod";


export const myService = pgTable('service', {
    id: serial('id').primaryKey(),
    name: text('service_name').notNull(),
    min_price: integer('min_price').notNull(),
    max_price: integer('max_price').notNull(),
    client: integer('client').notNull(),
    client_done: integer('client_done').notNull(),
    description: text('description').notNull()
}, (myService) => {
    return {
        serviceIdIndex: index('service_idx').on(myService.id)
    }
})

export const insertMyServiceSchema = createInsertSchema(myService, {
    name: z.string(),
    min_price: z
            .string()
            .regex(/^\d*[1-9]\d*$/),

    max_price: z
            .string()
            .regex(/^\d*[1-9]\d*$/),
    client: z
            .string()
            .regex(/^\d*[1-9]\d*$/),
    client_done: z
            .string()
            .regex(/^\d*[1-9]\d*$/),
    description: z
            .string()
            .regex(/^\d*[1-9]\d*$/),
})

export const selectMyServiceSchema = createSelectSchema(myService)

