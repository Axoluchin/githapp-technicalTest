import { UserProps } from "@/api/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

export interface UserCardProps {
  user: UserProps;
}

export default function UserCard({
  user: {
    name,
    bio,
    blog,
    email,
    login,
    html_url,
    followers,
    following,
    avatar_url,
    public_repos,
    twitter_username,
  },
}: UserCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-x-4">
        <Avatar className="size-20 ">
          <AvatarImage src={avatar_url} />
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
      <CardContent className="flex flex-wrap space-x-4">
        <span>Seguidores: {followers}</span>
        <span>Siguiendo: {following}</span>
        <span>Repositorios: {public_repos}</span>
      </CardContent>
      <CardFooter className="justify-end">
        <a
          className={buttonVariants({ variant: "link" })}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-2 size-4" />
          Ir al perfil
        </a>
        {blog && (
          <a
            className={buttonVariants({ variant: "link" })}
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
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
