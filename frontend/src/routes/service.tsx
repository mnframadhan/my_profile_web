import { createFileRoute } from "@tanstack/react-router";


import { RequestCompForm } from "@/my-components/requestCompForm";

export const Route = createFileRoute("/service")({
  component: Service,
});

function Service() {
  return (

    <RequestCompForm />
    );
}
