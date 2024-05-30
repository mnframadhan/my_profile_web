import { Hono } from "hono"
import { logger } from "hono/logger"
import { cors } from "hono/cors"

import message from "./routes/message"


const app = new Hono()

app.use("*", logger())
app.use("/api", cors())



app.route("/api", message)

export default app;