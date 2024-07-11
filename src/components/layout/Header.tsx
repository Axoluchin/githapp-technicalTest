import paths from "@/paths/routes";
import { buttonVariants } from "../ui/button";
import { ToggleTheme } from "./ToggleTheme";

export default function Header() {
  return (
    <header className="bg-background py-2 px-4 border-b sticky top-0 z-10 flex items-center">
      <a href={paths.root}>
        <h2 className="text-xl font-semibold">GitHapp</h2>
      </a>
      <nav className="flex-1 flex justify-center space-x-8">
        <a href={paths.user} className={buttonVariants({ variant: "link" })}>
          Buscar Usuarios
        </a>
        <a href={paths.repos} className={buttonVariants({ variant: "link" })}>
          Buscar Repositorios
        </a>
      </nav>
      <ToggleTheme />
    </header>
  );
}
