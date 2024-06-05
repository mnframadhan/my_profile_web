import { getAllMessageQueryOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Header } from "./header";



export function Messages() {

    const { status, data, error } = useQuery(getAllMessageQueryOptions);
    
      if (status === "pending") {
        return <span>Loading...</span>;
      }
    
      if (status === "error") {
        return <span>Error: {error.message}</span>;
      }

    return (
      <>
      <div className="border-2 rounded-xl shadow-xl">
        <Header title={"All messages"}/>
        <ScrollArea className="h-[350px] py-2">
        {data.messages.map((m) => {
          return (
            <div className="container my-2">
              <div className="w-full rounded-md border p-2">
                <div className="bg-slate-400 p-2 rounded-md">
                  <p className="text-xs">
                    <b>From: </b>
                    {m.name}
                  </p>
                  <p className="text-xs text-italic">{m.created_at}</p>
                </div>
                <div className="p-2 rounded-md">
                  <p className="text-xs text-balance text-justify">
                    {m.message}
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
      