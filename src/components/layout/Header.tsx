import paths from '@/paths/routes'
import { buttonVariants } from '../ui/button'
import { ToggleTheme } from './ToggleTheme'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-background py-2 px-4 border-b sticky top-0 z-10 flex items-center">
      <a href={paths.root} className="hidden sm:inline">
        <h2 className="text-xl font-semibold">GitHapp</h2>
      </a>
      <nav className="flex-1 flex justify-center sm:space-x-8">
        <Link href={paths.user} className={buttonVariants({ variant: 'link' })}>
          Usuarios
        </Link>
        <Link href={paths.repos} className={buttonVariants({ variant: 'link' })}>
          Repositorios
        </Link>
      </nav>
      <ToggleTheme />
    </header>
  )
}
