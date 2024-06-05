// tanstanck
import { useForm } from "@tanstack/react-form";

// ui components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// zod validator
import { zodValidator } from "@tanstack/zod-form-adapter";
// api
import { messageAPI, getAllMessageQueryOptions } from "@/lib/api";
import { useQueryClient } from "@tanstack/react-query";

import { Header } from "./header";

import { sendMessageSchema } from "@server/sharedTyped";
import { Textarea } from "@/components/ui/textarea";

export function SendMessage() {
  const queryClient = useQueryClient()
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      name: "",
      message: "",
    },
    onSubmit: async ({ value }) => {

      const existingMessages = await queryClient.ensureQueryData(getAllMessageQueryOptions);

      const res = await messageAPI.message.$post({ json: value });

      if (!res.ok) {
        throw new Error("Server Error");
      }

      const newMessage = await res.json();

      const test  = {
        ...existingMessages,
        messages: [newMessage, ...existingMessages.messages]
      }
      
      queryClient.setQueryData(getAllMessageQueryOptions.queryKey, test);
    },
  });
 
  return (
    <>
    <div className="border border-2 px-2 w-full">
      <Header title="Send me a message!" />
        <form className="container py-7"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div>
            <form.Field
              validators={{
                onChange: sendMessageSchema.shape.name,
              }}
              name="name"
              children={(field) => (
                <>
                  <Label>Nama</Label>
                  <Input
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="string"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors ? (
                    <em role="alert" className="text-red-700">
                      {field.state.meta.errors.join(", ")}
                    </em>
                  ) : null}
                  <br />
                </>
              )}
            />
            <form.Field
              validators={{
                onChange: sendMessageSchema.shape.message,
              }}
              name="message"
              children={(field) => (
                <>
                  <Label>Message</Label>
                  <Textarea
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Enter your message..."
                  />
                  {field.state.meta.errors ? (
                    <em role="alert" className="text-red-700">
                      {field.state.meta.errors.join(", ")}
                    </em>
                  ) : null}
                  <p className="text-sm text-muted-foreground">
        Your message will be appeared.
      </p>
                  <br />
                </>
              )}
            />
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button className="mt-4" type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </Button>
            )}
          />
        </form>
      </div>
    </>
  );
}
