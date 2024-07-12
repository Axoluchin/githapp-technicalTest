import './globals.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
// components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitApp',
  description: 'Encuentra tus usuarios y repositorios favoritos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} flex flex-col min-h-[100vh]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
