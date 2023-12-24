import { getServerSession } from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default async function AuthenticationPage() {
  const session = await getServerSession({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
    ],
  });

  return (
    <>
      <div className="md:hidden">
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0" />
          {session && (
            <div>
              <p>name: {session.user && session.user.name}</p>
              <p>email: {session.user && session.user.email}</p>
              <p>image:</p>
              <Image
                src={session.user && session.user.image}
                width={500}
                height={500}
                alt="Picture of the user"
              />
              <a href="/api/auth/signout">Sign out by link</a>
            </div>
          )}

          {!session && (
            <>
              <p>Not signed in</p>
              <a href="/api/auth/signin">Sign in</a>
            </>
          )}
        </div>
      </div>
    </>
  )
}
