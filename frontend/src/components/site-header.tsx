import Link from "next/link";

import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import { LuLogIn } from "react-icons/lu";

import { LogoutBtn } from "@/components/logout-btn";

export async function SiteHeader() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {session ? (
          <MainNav />
        ) : (
          <MainNav
            items={[
              {
                title: "Features",
                href: "/welcome#features",
              },
              {
                title: "Pricing",
                href: "/pricing",
              },
            ]}
          />
        )}
        {session ? (
          <MobileNav />
        ) : (
          <MobileNav
            items={[
              {
                title: "Features",
                href: "/welcome#features",
              },
              {
                title: "Pricing",
                href: "/pricing",
              },
            ]}
          />
        )}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center">
            <ModeToggle />

            {session ? (
              <LogoutBtn />
            ) : (
              <Link href="/login">
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0",
                  )}
                >
                  <LuLogIn className="h-4 w-4" />
                  <span className="sr-only">Login</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
