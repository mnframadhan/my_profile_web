import { createFileRoute } from "@tanstack/react-router";

import { MyProfile } from "@/my-components/myProfile";
import { Messages } from "@/my-components/messages";
import { SendMessage } from "@/my-components/messageForm"


export const Route = createFileRoute("/")({
  component: Index,
});



function Index() {
  

  return (
    <>
      <div className="container flex sm: flex-col md:flex-row mt-10 px-10 gap-4">
        <SendMessage />
        <Messages />
      </div>
      <MyProfile />
    </>
  );
}
