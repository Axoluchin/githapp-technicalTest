'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useZForm from '@/hooks/useZForm'

import { z } from 'zod'
import paths from '@/paths/routes'
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form'
import { useState } from 'react'

export default function Search() {
  const { push } = useRouter()
  const [loadingButton, setLoadingButton] = useState(false)

  const formSchema = z.object({
    repos: z
      .string()
      .min(1, 'Escribe al menos 1 carácter')
      .max(30, 'Limite de caracteres excedido'),
  })

  const {
    methods,
    handleSubmit,
    formState: { isValid },
  } = useZForm({ schema: formSchema, defaultValues: { repos: '' } })

  const onSubmit = async ({ repos }: z.infer<typeof formSchema>) => {
    setLoadingButton
    true
    const urlParams = new URLSearchParams({
      search: repos,
    })
    push(`${paths.repos}?${urlParams.toString()}`)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-96">
        <FormField
          control={methods.control}
          name="repos"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="my-favorite-repo" {...field} />
              </FormControl>
              <FormDescription>
                {error ? error.message : 'Encuentra tus repositorios favoritos'}
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex space-x-4 w-full">
          <Button className="w-full" disabled={!isValid || loadingButton} type="submit">
            {loadingButton ? 'Cargando' : 'Buscar Repositorio'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
