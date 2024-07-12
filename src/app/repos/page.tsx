import Link from 'next/link'
import paths from '@/paths/routes'
// components
import { AlertCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Alert, AlertTitle } from '@/components/ui/alert'
// api
import { searchRepos } from '@/api/repos'

import Search from '@/sections/repos/Search'
import RepoCard from '@/sections/repos/RepoCard'

interface PageReposProps {
  searchParams: {
    search: string
  }
}

export default async function PageRepos({ searchParams: { search } }: PageReposProps) {
  const { data, status } = search ? await searchRepos(search) : { data: null, status: null }

  if (!data || data.items.length === 0)
    return (
      <section className="flex flex-col justify-center items-center h-[70vh] gap-4 m-auto px-4">
        <h1 className="text-5xl font-bold">GitHapp</h1>
        <Search />
        {status !== null && (
          <Alert variant="destructive" className="sm:w-96">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Repositorios no encontrados</AlertTitle>
          </Alert>
        )}
      </section>
    )

  return (
    <div className="my-4 flex flex-col space-y-4 overflow-hidden max-w-screen-2xl m-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Resultados de {search}</h1>
      <div className="flex justify-center">
        <Link href={paths.repos} className={buttonVariants()}>
          Buscar otros repositorios
        </Link>
      </div>
      <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 px-2">
        {data.items.map((repo) => (
          <RepoCard {...repo} key={repo.id} />
        ))}
      </section>
    </div>
  )
}
