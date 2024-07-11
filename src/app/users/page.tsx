import Link from "next/link";
import { searchUser } from "@/api/users";
import UserCard from "@/components/cards/UserCard";
import { buttonVariants } from "@/components/ui/button";
import paths from "@/paths/routes";

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

  if (data === null)
    return (
      <div>
        <h2>GitHapp</h2>
        <span>Busca un usuario</span>
      </div>
    );

  if (status !== 200 || !data)
    return (
      <div>
        <h2>Usuario no encontrado</h2>
        <span>status: {status}</span>
      </div>
    );

  return (
    <div className="my-4">
      <h1 className="text-center text-5xl font-semibold">Usuario {search}</h1>
      <section className="max-w-lg m-auto my-8 flex flex-col justify-center space-y-8">
        <UserCard user={data} />
        <Link href={paths.user} className={buttonVariants()}>
          Buscar otro usuario
        </Link>
      </section>
    </div>
  );
}
