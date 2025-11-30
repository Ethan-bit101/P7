import { Toaster } from "@/components/ui/sonner"
import type { LayoutProps } from "next"

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
