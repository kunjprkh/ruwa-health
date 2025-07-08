import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Ruwa Design System',
    template: '%s | Ruwa Design System',
  },
  description: 'A modern design system built with Next.js 14, TypeScript, and Tailwind CSS.',
  keywords: [
    'design system',
    'nextjs',
    'typescript',
    'tailwindcss',
    'react',
    'components',
  ],
  authors: [
    {
      name: 'Kunj Parekh',
    },
  ],
  creator: 'Kunj Parekh',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}