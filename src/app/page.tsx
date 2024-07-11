import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Search from "@/sections/home/Search";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-96 gap-4 m-auto">
      <h1 className="text-5xl font-bold">GithApp</h1>
      <Search />
    </section>
  );
}
