import { Hono } from "hono"
import { logger } from "hono/logger"
import { serveStatic } from "hono/bun"

import profile from "./routes/profile"
import message from "./routes/message"


const app = new Hono()

app.use("*", logger())

const ProfileRoute = app.basePath("/api").route("/profile", profile )
const MessageRoute = app.basePath("/api").route("/message", message)

// static
app.use("*", serveStatic({root: './frontend/dist' }))
app.use("*", serveStatic({path: './frontend/dist/index.html'}))


export default app;
export type ProfileAPIRoute = typeof ProfileRoute
export type MessageAPIRoute = typeof MessageRoute