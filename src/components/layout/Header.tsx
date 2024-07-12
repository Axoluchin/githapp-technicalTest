import Link from 'next/link'
import paths from '@/paths/routes'
// components
import { buttonVariants } from '@/components/ui/button'
import { ToggleTheme } from './ToggleTheme'

const pages = [
  {
    label: 'Usuarios',
    href: paths.user,
  },
  {
    label: 'Repositorios',
    href: paths.repos,
  },
]

export default function Header() {
  return (
    <header className="bg-background py-2 px-4 border-b sticky top-0 z-10 flex items-center">
      <a href={paths.root} className="hidden sm:inline">
        <h2 className="text-xl font-semibold">GitHapp</h2>
      </a>
      <nav className="flex-1 flex justify-center sm:space-x-8">
        {pages.map(({ href, label }) => (
          <Link href={href} className={buttonVariants({ variant: 'link' })} key={label}>
            {label}
          </Link>
        ))}
      </nav>
      <ToggleTheme />
    </header>
  )
}
