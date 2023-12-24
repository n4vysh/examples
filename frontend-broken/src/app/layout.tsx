// import { Providers } from "./providers";
//
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }
import "./globals.css"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={
          clsx(
            cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            ),
            "bg-zinc-900"
          )
        }
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
