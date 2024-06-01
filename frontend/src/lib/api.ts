import { hc } from "hono/client"

import { ProfileAPIRoute, MessageAPIRoute, RequestCompAPIRoute } from "@server/app"


const myProfileClient = hc<ProfileAPIRoute>('/')
const messageClient = hc<MessageAPIRoute>('/')
const requestCompClient = hc<RequestCompAPIRoute>('/')

export const myProfileAPI = myProfileClient.api
export const messageAPI = messageClient.api
export const requestCompAPI = requestCompClient.api


