import { hc } from "hono/client"

import { ProfileAPIRoute, MessageAPIRoute } from "@server/app"


const myProfileClient = hc<ProfileAPIRoute>('/')
const messageClient = hc<MessageAPIRoute>('/')

export const myProfileAPI = myProfileClient.api
export const messageAPI = messageClient.api


