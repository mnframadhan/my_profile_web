import { hc } from "hono/client"

import { ProfileAPIRoute, MessageAPIRoute, RequestCompAPIRoute } from "@server/app"
import { queryOptions } from "@tanstack/react-query"


const myProfileClient = hc<ProfileAPIRoute>('/')
const messageClient = hc<MessageAPIRoute>('/')
const requestCompClient = hc<RequestCompAPIRoute>('/')



export async function getAllMessage() {
    const res = await messageAPI.message.$get();
    const message = await res.json();
  
    return message;
  }

export const getAllMessageQueryOptions = queryOptions({
        queryKey: ["get-message"],
        queryFn: getAllMessage,
        staleTime: 1000*60*5
      })


export const myProfileAPI = myProfileClient.api
export const messageAPI = messageClient.api
export const requestCompAPI = requestCompClient.api


