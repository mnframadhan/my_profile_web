import { insertMessageSchema } from "./db/schema/message";
import { insertRequestCompSchema } from "./db/schema/requestWebsiteComp";

export const messageSchema = insertMessageSchema.omit({
    id: true,
    created_at: true,
})

export const compSchema = insertRequestCompSchema.omit({
    id: true,
    created_at: true,
})




export const sendMessageSchema = messageSchema
export const requestCompSchema = compSchema