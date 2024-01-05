"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { usePathname } from "next/navigation";

interface LoginBtnProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export function LoginBtn({ className, ...props }: LoginBtnProps) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/login");

  if (!isAuthPage) {
    return (
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "px-4",
        )}
      >
        Login
      </Link>
    );
  }
}
