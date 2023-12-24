"use client";

import * as React from "react";
import { signIn } from "next-auth/react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CgSpinner } from "react-icons/cg";
import { LuUser } from "react-icons/lu";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isAuth0Loading, setIsAuth0Loading] = React.useState<boolean>(false);
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsAuth0Loading(true);
          signIn("auth0");
        }}
        disabled={isAuth0Loading}
      >
        {isAuth0Loading ? (
          <CgSpinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LuUser className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Simple Account
      </button>
    </div>
  );
}
