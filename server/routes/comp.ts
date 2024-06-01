import { Hono } from "hono";
import { db } from "../db"

import { requestComp as requestCompTable } from "../db/schema/requestWebsiteComp"

import { zValidator } from "@hono/zod-validator"

import { compSchema } from "../sharedTyped"
import { insertRequestCompSchema } from "../db/schema/requestWebsiteComp"




const app = new Hono()

    .post('/', zValidator('json', compSchema), async (c) => {
        const compInserted = c.req.valid('json')

        const validatedRequestComp = insertRequestCompSchema.parse(
            {
                ...compInserted
            }
        )

        const result = await db
                            .insert(requestCompTable)
                            .values(validatedRequestComp)

        return c.json({status: 201, message: "sent", data: result})
    })

export default app