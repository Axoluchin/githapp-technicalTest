import paths from "@/paths/routes";

export default function Header() {
  return (
    <header className="p-4 border-b sticky top-0 z-10 flex">
      <a href={paths.root}>
        <h2 className="text-xl font-semibold">GitHapp</h2>
      </a>
      <nav className="flex-1 flex justify-center space-x-8">
        <a href={paths.user}>Buscar Usuarios</a>
        <a href={paths.repos}>Buscar Repositorios</a>
      </nav>
    </header>
  );
}
