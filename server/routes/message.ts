import { Hono } from "hono";
import { db } from "../db"
import { message } from "../db/schema/message";
import { desc } from "drizzle-orm";

import { message as messageTable } from "../db/schema/message"

import { zValidator } from "@hono/zod-validator"

import { sendMessageSchema } from "../sharedTyped"
import { insertMessageSchema } from "../db/schema/message"



const app = new Hono()
    .get('/', async (c) => {
        const messages = await db
                            .select()
                            .from(message)
                            .orderBy(desc(message.id))
        return c.json({messages: messages})
    })

    .post('/', zValidator('json', sendMessageSchema), async (c) => {
        const message = c.req.valid('json')

        const validatedMessage = insertMessageSchema.parse(
            {
                ...message
            }
        )

        const result = await db
                            .insert(messageTable)
                            .values(validatedMessage)
                            .returning()
                            .then((res) => res[0])

        c.status(201)
        return c.json(result)
    })

export default app