import { insertMessageSchema } from "./db/schema/message";

export const messageSchema = insertMessageSchema.omit({
    id: true,
    created_at: true,
})

export const sendMessageSchema = messageSchema