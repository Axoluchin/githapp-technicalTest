import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, useForm } from 'react-hook-form'

export interface useZFormProps<T> {
  schema: z.ZodType<T>
  defaultValues: DefaultValues<T>
}

const useZForm = <T extends Object>({ schema, defaultValues }: useZFormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return { methods, ...methods }
}

export default useZForm
