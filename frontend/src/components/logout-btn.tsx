"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { LuLogOut } from "react-icons/lu";

import { signOut } from "next-auth/react";

interface LogoutBtnProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LogoutBtn({ className, ...props }: LogoutBtnProps) {
  return (
    <div
      onClick={() => signOut()}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-9 px-0",
      )}
    >
      <LuLogOut className="h-4 w-4" />
      <span className="sr-only">Logout</span>
    </div>
  );
}
