import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mints On The House',
  description: 'A community for Artists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Banner />
            <main className="max-w-2xl mx-auto px-4">              
            {children}
            </main>
          </ThemeProvider>
      </body>
    </html>
  )
}
