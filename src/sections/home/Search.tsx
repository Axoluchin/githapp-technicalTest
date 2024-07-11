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
    userepo: z.string().min(5, "Escribe al menos 5 caracteres").max(50),
  });

  const {
    methods,
    handleSubmit,
    formState: { isValid },
  } = useZForm({ schema: formSchema, defaultValues: { userepo: "" } });

  const onSubmit = (
    { userepo }: z.infer<typeof formSchema>,
    path = paths.user
  ) => {
    const urlParams = new URLSearchParams({
      search: userepo,
    });
    console.log("HOLA");
    push(`${path}?${urlParams.toString()}`);
  };

  return (
    <Form {...methods}>
      <form action="" className="flex flex-col gap-4 w-96">
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
            disabled={!isValid}
            onClick={handleSubmit((d) => onSubmit(d, paths.user))}
          >
            Buscar Usuario
          </Button>
          <Button
            className="w-full"
            disabled={!isValid}
            onClick={handleSubmit((d) => onSubmit(d, paths.repos))}
          >
            Buscar Repositorio
          </Button>
        </div>
      </form>
    </Form>
  );
}
