import { RepoProps, UserProps } from "@/api/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Globe, Mail, Star } from "lucide-react";
import paths from "@/paths/routes";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export interface UserCardProps {
  user: UserProps;
  repos?: RepoProps[] | null;
}

export default function UserCard({
  user: {
    bio,
    name,
    type,
    blog,
    email,
    login,
    html_url,
    location,
    company,
    followers,
    following,
    avatar_url,
    public_repos,
    twitter_username,
  },
  repos,
}: UserCardProps) {
  return (
    <Card>
      <CardHeader className="sm:flex-row items-center sm:space-x-4">
        <Avatar
          className={`size-20 mt-2 ${
            type === "Organization" && "rounded-none"
          }`}
        >
          <AvatarImage src={avatar_url} alt={`${login} avatar`} />
          <AvatarFallback>
            {name
              ?.split(" ")
              .map((n) => n.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name || login}</CardTitle>
          <CardDescription>
            #{login}{" "}
            {email && (
              <a href={`mailto:${email}`} className="hover:underline">
                <Mail className="inline size-4" /> {email}
              </a>
            )}
          </CardDescription>
          {bio && (
            <CardDescription className="text-pretty mt-2">
              {bio}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 items-center h-8">
          <div className="flex flex-col items-center">
            <Badge variant="outline">{followers}</Badge>
            <span className="font-semibold">Seguidores</span>
          </div>
          <Separator orientation="vertical" decorative />
          <div className="flex flex-col items-center">
            <Badge variant="outline">{followers}</Badge>
            <span className="font-semibold">Siguiendo</span>
          </div>
        </div>
        <p className="mt-6 flex items-center gap-2">
          <Globe className="size-4 inline" /> {location}{" "}
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Repositorios: {public_repos}</AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-4">
              {repos?.map((props) => (
                <RepoBox {...props} key={props.id} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="justify-between flex-wrap sm:justify-end">
        <a
          className={buttonVariants({ variant: "link" })}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-2 size-4" />
          Github
        </a>
        {blog && (
          <Link
            className={buttonVariants({ variant: "link" })}
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
        )}
        {twitter_username && (
          <a
            className={buttonVariants({ variant: "link" })}
            href={`https://www.x.com/${twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter / X
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

const RepoBox = ({
  name,
  fork,
  description,
  language,
  html_url,
  stargazers_count,
}: RepoProps) => (
  <Link
    href={html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 border rounded-lg hover:bg-border"
  >
    <div className="flex flex-wrap justify-between items-center gap-2 ">
      <h6 className="font-semibold">{name}</h6>
      <div className="flex space-x-4">
        {!!stargazers_count && (
          <Badge variant="outline">
            {" "}
            <Star className="size-3 mr-2" /> {stargazers_count}
          </Badge>
        )}
        {language && <Badge>{language}</Badge>}
        {fork && <Badge variant="secondary">Fork</Badge>}
      </div>
    </div>
    {description && <p className="text-muted-foreground mt-4">{description}</p>}
  </Link>
);
