import Link from "next/link";
import { searchUser } from "@/api/users";
import UserCard from "@/components/cards/UserCard";
import { buttonVariants } from "@/components/ui/button";
import paths from "@/paths/routes";
import Search from "@/sections/users/Search";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

interface PageUsersProps {
  searchParams: {
    search?: string;
  };
}

export default async function PageUsers({
  searchParams: { search },
}: PageUsersProps) {
  const { data, status } = search
    ? await searchUser(search)
    : { data: null, status: null };

  if (!data)
    return (
      <section className="flex flex-col justify-center items-center h-96 gap-4 m-auto">
        <h1 className="text-5xl font-bold">GitHapp</h1>
        <Search />
        {status !== null && (
          <Alert variant={"destructive"} className="w-96">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Usuario no encontrado</AlertTitle>
          </Alert>
        )}
      </section>
    );

  return (
    <div className="my-4">
      <h1 className="text-center text-5xl font-semibold">{search}</h1>
      <section className="max-w-lg m-auto my-8 flex flex-col justify-center space-y-8">
        <UserCard user={data} />
        <Link href={paths.user} className={buttonVariants()}>
          Buscar otro usuario
        </Link>
      </section>
    </div>
  );
}
