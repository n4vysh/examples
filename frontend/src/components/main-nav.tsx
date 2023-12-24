"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { useSelectedLayoutSegment } from "next/navigation";

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      {/* <nav className="flex items-center space-x-6 text-sm font-medium"> */}
      {/*   <Link */}
      {/*     href="/welcome#features" */}
      {/*     className={cn( */}
      {/*       "transition-colors hover:text-foreground/80", */}
      {/*       pathname === "/welcome#features" */}
      {/*         ? "text-foreground" */}
      {/*         : "text-foreground/60", */}
      {/*     )} */}
      {/*   > */}
      {/*     Features */}
      {/*   </Link> */}
      {/*   <Link */}
      {/*     href="/pricing" */}
      {/*     className={cn( */}
      {/*       "transition-colors hover:text-foreground/80", */}
      {/*       pathname?.startsWith("/pricing") */}
      {/*         ? "text-foreground" */}
      {/*         : "text-foreground/60", */}
      {/*     )} */}
      {/*   > */}
      {/*     Pricing */}
      {/*   </Link> */}
      {/* </nav> */}
    </div>
  );
}
