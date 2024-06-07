import { createFileRoute } from "@tanstack/react-router";

import { Card, CardHeader, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Link } from "@tanstack/react-router";

import { MyProfile } from "@/my-components/myProfile";
import { Messages } from "@/my-components/messages";
import { SendMessage } from "@/my-components/messageForm"
import { UploadTest } from "@/my-components/uploadTest";


export const Route = createFileRoute("/")({
  component: Index,
});



function Index() {
  

  return (
    <>

      <div className="w-full min-h-96 py-24 bg-indigo-50">

        <div className="px-24">
          <h1 className="text-5xl font-semibold">Milenial Solusindo</h1>
          <h3 className="mb-4 mt-2">Menawarkan jasa pembuatan aplikasi.</h3>
          <h4 className="text-xs">PT. Milenial IT Solusindo</h4>
        </div>
        <div className="px-24">
          <Card className="w-fit max-w-72 my-5">
            <CardHeader>
              <h1 className="text-2xl font-bold">Jasa Pembuatan Company Profile</h1>
            </CardHeader>
            <CardDescription>
              <p className="px-5 text-pretty">
                Buat website perusahaanmu lebih menarik, responsive, dan super
                cepat. Dapatkan harga terjangkau.
              </p>
            </CardDescription>
            <CardContent>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link to="/requestCompForm"><Button variant={"outline"}>Example!</Button></Link>
              <Link to="/requestCompForm"><Button>Book Now!</Button></Link>
            </CardFooter>
          </Card>
        </div>

      </div>
      <div className="container flex sm: flex-col md:flex-row mt-10 px-10 gap-4">
        <SendMessage /> 
        <Messages />
      </div>
      <MyProfile />

      <UploadTest />
    </>
  );
}
