import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import '../styles/tokens.css'  // Add this line
import '../styles/shadcn-default.css'

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
  description: 'A modern design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components.',
  keywords: [
    'design system',
    'nextjs',
    'typescript',
    'tailwindcss',
    'shadcn-ui',
    'react',
    'components',
  ],
  authors: [
    {
      name: 'Kunj Parekh',
    },
  ],
  creator: 'Kunj Parekh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ruwa.vercel.app',
    title: 'Ruwa Design System',
    description: 'A modern design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components.',
    siteName: 'Ruwa Design System',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ruwa Design System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruwa Design System',
    description: 'A modern design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}