export default function Header() {
  return (
    <header className="p-4 border-b sticky top-0 z-10 flex">
      <h2 className="text-xl font-semibold">GitHapp</h2>
      <nav className="flex-1 flex justify-center space-x-8">
        <a href="/users">Buscar Usuarios</a>
        <a href="/repos">Buscar Repositorios</a>
      </nav>
    </header>
  );
}
