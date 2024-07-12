import Search from '@/sections/home/Search'

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-[70vh] gap-4 m-auto">
      <h1 className="text-5xl font-bold">GitHapp</h1>
      <Search />
    </section>
  )
}
