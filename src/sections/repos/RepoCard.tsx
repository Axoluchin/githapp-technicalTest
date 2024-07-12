import Link from 'next/link'
import paths from '@/paths/routes'
// components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { Badge, BadgeProps } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Book, ExternalLink, Eye, Star, User } from 'lucide-react'
// api
import { RepoProps } from '@/api/interfaces'
import { getLanguagesByRepo } from '@/api/repos'

import LanguagesChart from './LanguagesChart'

export interface RepoCardProps extends RepoProps {}

export default async function RepoCard({
  name,
  fork,
  owner,
  topics,
  license,
  archived,
  html_url,
  language,
  homepage,
  description,
  watchers_count,
  languages_url,
  stargazers_count,
}: RepoCardProps) {
  const languages = await getLanguagesByRepo(languages_url)

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center sm:flex-row sm:items-start sm:space-x-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Avatar className={`size-16 mt-2 ${owner.type === 'Organization' && 'rounded-none'}`}>
              <AvatarImage src={owner.avatar_url} alt={`${owner.login} avatar`} loading="lazy" />
              <AvatarFallback>
                {name
                  ?.split(' ')
                  .map((n) => n.charAt(0))
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto flex flex-col justify-start">
            <Link
              className={buttonVariants({ variant: 'link' })}
              href={`${paths.user}?search=${owner.login}`}
            >
              Ver perfil de {owner.login} <User className="size-4 ml-2" />
            </Link>
            <Link
              className={buttonVariants({ variant: 'link' })}
              href={owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al Github de {owner.login} <ExternalLink className="size-4 ml-2" />
            </Link>
          </HoverCardContent>
        </HoverCard>

        <div className="flex flex-col space-y-1">
          <CardTitle className="text-center sm:text-start my-4 sm:m-0">{name}</CardTitle>
          <div className="flex items-center justify-center sm:justify-between">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <CustomBadge value={stargazers_count} variant="outline">
                <Star className="size-3 mr-2" />
              </CustomBadge>
              <CustomBadge value={watchers_count} variant="outline">
                <Eye className="size-3 mr-2" />
              </CustomBadge>
              <CustomBadge value={license?.spdx_id} variant="outline">
                <Book className="size-3 mr-2" />
              </CustomBadge>
              <CustomBadge value={language} />
              <CustomBadge value={archived && 'Archivado'} variant="destructive" />
              <CustomBadge value={fork && 'Fork'} variant="secondary" />
            </div>
          </div>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <LanguagesChart data={languages} />
        {!!topics?.length && (
          <div className="mt-4 md:m-0">
            <h4 className="font-semibold mb-1">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Badge variant="secondary" key={topic}>
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap justify-end">
        {homepage && (
          <Link
            className={buttonVariants({ variant: 'link' })}
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pagina web <ExternalLink className="size-4 ml-2" />
          </Link>
        )}
        <Link
          className={buttonVariants({ variant: 'link' })}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github del repositorio <ExternalLink className="size-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  )
}

interface CustomBadgeProps extends BadgeProps {
  value?: string | number | boolean
}

const CustomBadge = ({ value, children, ...props }: CustomBadgeProps) =>
  !!value && (
    <Badge {...props}>
      {children} {value}
    </Badge>
  )
