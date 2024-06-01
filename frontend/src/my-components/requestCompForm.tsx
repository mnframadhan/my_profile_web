// tanstack
import { useForm } from "@tanstack/react-form";

// zod validator
import { zodValidator } from "@tanstack/zod-form-adapter";

// api
import { requestCompAPI } from "@/lib/api";

import { requestCompSchema } from "@server/sharedTyped";

import { Header } from "@/my-components/header";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function RequestCompForm() {
  const form = useForm({
    validatorAdapter: zodValidator,
    defaultValues: {
      nama_perusahaan: "",
      bidang: "",
      no_wa: "",
    },
    onSubmit: async ({ value }) => {
      const res = await requestCompAPI.requestComp.$post({ json: value });

      if (!res.ok) {
        throw new Error("Server Error");
      }
    },
  });

  return (
    <div className="container">
      <Header title="Service Alvailable"></Header>
      <Card>
        <CardHeader>
          <CardTitle>Pembuatan Website Company Profile</CardTitle>
          <CardDescription>
            Super Fast, modern and minimalized-elegant style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Book Now!</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Book Now!</DialogTitle>
                <DialogDescription>
                  Masukkan data selengkap-lengkapnya yaa
                </DialogDescription>
              </DialogHeader>


                  <form
                    className="container py-7"
                    onSubmit={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      form.handleSubmit();
                    }}
                  >
                      <form.Field
                        validators={{
                          onChange: requestCompSchema.shape.nama_perusahaan,
                        }}
                        name="nama_perusahaan"
                        children={(field) => (
                          <>
                            <Label>Nama Perusahaan</Label>
                            <Input
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              type="string"
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
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
                          onChange: requestCompSchema.shape.bidang,
                        }}
                        name="bidang"
                        children={(field) => (
                          <>
                            <Label>Bidang</Label>
                            <Input
                              className="col-span-3"
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              type="string"
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
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
                          onChange: requestCompSchema.shape.bidang,
                        }}
                        name="no_wa"
                        children={(field) => (
                          <>
                            <Label>WhatsApp</Label>
                            <Input
                              className="col-span-3"
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              type="string"
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
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
                    <form.Subscribe
                      selector={(state) => [
                        state.canSubmit,
                        state.isSubmitting,
                      ]}
                      children={([canSubmit, isSubmitting]) => (
                        <DialogFooter>

                        <Button
                          className="mt-4"
                          type="submit"
                          disabled={!canSubmit}
                        >
                          {isSubmitting ? "..." : "Send Request"}
                        </Button>
                        </DialogFooter>
                      )}
                    />
                  </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
