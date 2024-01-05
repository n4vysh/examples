import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import { UserAccountNav } from "@/components/user-account-nav";
import { LoginBtn } from "@/components/login-btn";

export async function SiteHeader() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {session ? (
          <MainNav
            items={[
              {
                title: "Tasks",
                href: "/",
              },
            ]}
          />
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
          <MobileNav
            items={[
              {
                title: "Tasks",
                href: "/",
              },
            ]}
          />
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
            {session ? (
              <UserAccountNav
                user={{
                  name: session?.user?.name,
                  image: session?.user?.image,
                  email: session?.user?.email,
                }}
              />
            ) : (
              <LoginBtn />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
