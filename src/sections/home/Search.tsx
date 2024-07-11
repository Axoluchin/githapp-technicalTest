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
    userepo: z
      .string()
      .min(1, "Escribe al menos 1 carácter")
      .max(30, "Limite de caracteres excedido"),
  });

  const {
    methods,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useZForm({ schema: formSchema, defaultValues: { userepo: "" } });

  const onSubmit = (
    { userepo }: z.infer<typeof formSchema>,
    path = paths.user
  ) => {
    const urlParams = new URLSearchParams({
      search: userepo,
    });
    push(`${path}?${urlParams.toString()}`);
  };

  return (
    <Form {...methods}>
      <form action="" className="flex flex-col gap-4 md:w-96">
        <FormField
          control={methods.control}
          name="userepo"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="user4321 / my-favorite-repo" {...field} />
              </FormControl>
              <FormDescription>
                {error
                  ? error.message
                  : "Encuentra tus usuarios / repositorios favoritos"}
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="flex space-x-4 w-full">
          <Button
            className="w-full"
            disabled={!isValid || isSubmitting}
            onClick={handleSubmit((d) => onSubmit(d, paths.user))}
          >
            Buscar Usuario
          </Button>
          <Button
            className="w-full"
            disabled={!isValid || isSubmitting}
            onClick={handleSubmit((d) => onSubmit(d, paths.repos))}
          >
            Buscar Repositorio
          </Button>
        </div>
      </form>
    </Form>
  );
}
