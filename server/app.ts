import { Hono } from "hono"
import { logger } from "hono/logger"
import { serveStatic } from "hono/bun"

import profile from "./routes/profile"
import message from "./routes/message"
import comp from "./routes/comp"

const app = new Hono()

app.use("*", logger())

// main index
const ProfileRoute = app.basePath("/api").route("/profile", profile )
const MessageRoute = app.basePath("/api").route("/message", message)

// my services
const CompRoute = app.basePath("/api").route("requestComp", comp)

// static
app.use("*", serveStatic({root: './frontend/dist' }))
app.use("*", serveStatic({path: './frontend/dist/index.html'}))


export default app;
export type ProfileAPIRoute = typeof ProfileRoute
export type MessageAPIRoute = typeof MessageRoute
export type RequestCompAPIRoute = typeof CompRoute