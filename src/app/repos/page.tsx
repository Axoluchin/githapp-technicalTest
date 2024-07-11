import { searchRepos } from "@/api/repos";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import paths from "@/paths/routes";
import RepoCard from "@/sections/repos/RepoCard";
import Search from "@/sections/repos/Search";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface PageReposProps {
  searchParams: {
    search: string;
  };
}

export default async function PageRepos({
  searchParams: { search },
}: PageReposProps) {
  const { data, status } = search
    ? await searchRepos(search)
    : { data: null, status: null };

  if (!data)
    return (
      <section className="flex flex-col justify-center items-center h-96 gap-4 m-auto">
        <h1 className="text-5xl font-bold">GitHapp</h1>
        <Search />
        {status !== null && (
          <Alert variant={"destructive"} className="w-96">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Repositorios no encontrados</AlertTitle>
          </Alert>
        )}
      </section>
    );

  return (
    <div className="my-4 flex flex-col space-y-4 px-8">
      <h1 className="text-5xl font-bold text-center">Resultados de {search}</h1>
      <div className="flex justify-center">
        <Link href={paths.repos} className={buttonVariants()}>
          Buscar otros repositorios
        </Link>
      </div>
      <section className="grid grid-cols-3 gap-8">
        {data.items.map((repo) => (
          <RepoCard {...repo} key={repo.id} />
        ))}
      </section>
    </div>
  );
}
