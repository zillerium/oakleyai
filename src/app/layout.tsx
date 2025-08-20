import "./globals.css"
import type { Metadata } from "next"
import { SITE_NAME, DESCRIPTION } from "@/config"
import { AppProvider } from "@/context"

export const metadata: Metadata = {
  title: SITE_NAME,
  description: DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

