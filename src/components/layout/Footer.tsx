import paths from '@/paths/routes'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-4 flex justify-between items-center bg-card-foreground dark:bg-background text-primary-foreground dark:text-primary dark:border-t">
      <Link href={paths.root} className="text-xl font-semibold">
        GitHapp
      </Link>

      <Link href={paths.root} className="text-xl font-semibold">
        Github Repo <ExternalLink className="ml-2 size-4 inline-block" />
      </Link>
    </footer>
  )
}
