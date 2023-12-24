import { Metadata } from "next";

import { UserAuthForm } from "@/components/user-auth-form";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Log in to {siteConfig.name}
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
