"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useZForm from "@/hooks/useZForm";

import { z } from "zod";
import paths from "@/paths/routes";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";

export default function Search() {
  const { push } = useRouter();

  const formSchema = z.object({
    user: z
      .string()
      .min(1, "Escribe al menos 1 carácter")
      .max(30, "Limite de caracteres excedido"),
  });

  const {
    methods,
    handleSubmit,
    formState: { isValid },
  } = useZForm({ schema: formSchema, defaultValues: { user: "" } });

  const onSubmit = ({ user }: z.infer<typeof formSchema>) => {
    const urlParams = new URLSearchParams({
      search: user,
    });
    push(`${paths.user}?${urlParams.toString()}`);
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full px-4 sm:w-96"
      >
        <FormField
          control={methods.control}
          name="user"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="user4321" {...field} />
              </FormControl>
              <FormDescription>
                {error ? error.message : "Encuentra tus usuarios favoritos"}
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="flex space-x-4 w-full">
          <Button className="w-full" disabled={!isValid} type="submit">
            Buscar Usuario
          </Button>
        </div>
      </form>
    </Form>
  );
}
