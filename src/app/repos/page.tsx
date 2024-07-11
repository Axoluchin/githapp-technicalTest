interface PageReposProps {
  searchParams: {
    search: string;
  };
}

export default function PageRepos({
  searchParams: { search },
}: PageReposProps) {
  return <div>Repositorios: {search}</div>;
}
