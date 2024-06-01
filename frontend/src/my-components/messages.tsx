import { messageAPI } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Header } from "./header";

async function fetchMessage() {
    const res = await messageAPI.message.$get();
    const message = await res.json();
  
    return message;
  }


export function Messages() {

    const { status, data, error } = useQuery({
        queryKey: ["get-message"],
        queryFn: fetchMessage,
      });
    
      if (status === "pending") {
        return <span>Loading...</span>;
      }
    
      if (status === "error") {
        return <span>Error: {error.message}</span>;
      }

    return (
      <>
      <div className="border border-2">
        <Header title={"All messages"}/>
        <ScrollArea className="h-[350px] py-2">
        {data.data.map((message) => {
          return (
            <div className="container my-2">
              <div className="w-full rounded-md border p-2">
                <div className="bg-slate-400 p-2 rounded-md">
                  <p className="text-xs">
                    <b>From: </b>
                    {message.name}
                  </p>
                  <p className="text-xs text-italic">{message.created_at}</p>
                </div>
                <div className="p-2 rounded-md">
                  <p className="text-xs text-pretty text-balance text-justify">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollArea>
      </div>
      </>
    )
}
      