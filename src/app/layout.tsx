import type { Metadata, Viewport } from 'next'
import './globals.css'

// Using Geist fonts via Google Fonts CDN in globals.css

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}