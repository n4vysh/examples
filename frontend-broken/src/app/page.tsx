// import { getServerSession } from "next-auth/next";
// import GithubProvider from "next-auth/providers/github";
//
// export default async function Home() {
//   const session = await getServerSession({
//     providers: [
//       GithubProvider({
//         clientId: process.env.GITHUB_CLIENT_ID as string,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//       }),
//     ],
//   });
//
//   return (
//     <div>
//       <h2>Simple Todo</h2>
//
//       {session && (
//         <div>
//           <p>Signed in as {session.user && session.user.name}</p>
//           <p>session: {JSON.stringify(session)}</p>
//           <a href="/api/auth/signout">Sign out by link</a>
//         </div>
//       )}
//
//       {!session && (
//         <>
//           <p>Not signed in</p>
//           <a href="/api/auth/signin">Sign in</a>
//         </>
//       )}
//     </div>
//   );
// }

import { getServerSession } from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
        {/* <Image */}
        {/*   src="/examples/authentication-light.png" */}
        {/*   width={1280} */}
        {/*   height={843} */}
        {/*   alt="Authentication" */}
        {/*   className="block dark:hidden" */}
        {/* /> */}
        {/* <Image */}
        {/*   src="/examples/authentication-dark.png" */}
        {/*   width={1280} */}
        {/*   height={843} */}
        {/*   alt="Authentication" */}
        {/*   className="hidden dark:block" */}
        {/* /> */}
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <Link */}
        {/*   href="/examples/authentication" */}
        {/*   className={cn( */}
        {/*     buttonVariants({ variant: "ghost" }), */}
        {/*     "absolute right-4 top-4 md:right-8 md:top-8" */}
        {/*   )} */}
        {/* > */}
        {/*   Login */}
        {/* </Link> */}
        <div className="relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0" />
          {/* <div className="relative z-20 mt-auto"> */}
          {/*   <blockquote className="space-y-2"> */}
          {/*     <p className="text-lg"> */}
          {/*       &ldquo;This library has saved me countless hours of work and */}
          {/*       helped me deliver stunning designs to my clients faster than */}
          {/*       ever before.&rdquo; */}
          {/*     </p> */}
          {/*     <footer className="text-sm">Sofia Davis</footer> */}
          {/*   </blockquote> */}
          {/* </div> */}

          {/* {session && ( */}
          {/*   <div> */}
          {/*     <p>Signed in as {session.user && session.user.name}</p> */}
          {/*     <p>session: {JSON.stringify(session)}</p> */}
          {/*     <a href="/api/auth/signout">Sign out by link</a> */}
          {/*   </div> */}
          {/* )} */}
          {/**/}
          {/* {!session && ( */}
          {/*   <> */}
          {/*     <p>Not signed in</p> */}
          {/*     <a href="/api/auth/signin">Sign in</a> */}
          {/*   </> */}
          {/* )} */}
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* <div className="flex flex-col space-y-2 text-center"> */}
            {/*   <h1 className="text-2xl font-semibold tracking-tight"> */}
            {/*     Sign in */}
            {/*   </h1> */}
            {/* </div> */}
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}
