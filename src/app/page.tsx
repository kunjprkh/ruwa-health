import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-fg-primary">
      <div className="container mx-auto px-16 py-24">
        <div className="mx-auto max-w-4xl space-y-16 text-center">
          {/* Hero Section */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold tracking-tight">
              Welcome to <span className="text-blue-70">Ruwa</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-fg-secondary">
              A modern design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-large border border-border-primary bg-bg-secondary p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-medium bg-bg-accent">
                <span className="text-xl text-content-on-color">🎨</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Design Tokens</h3>
              <p className="text-fg-secondary">
                Comprehensive color, spacing, and typography tokens that scale across light and dark modes.
              </p>
            </div>

            <div className="rounded-large border border-border-primary bg-bg-secondary p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-medium bg-bg-positive">
                <span className="text-xl text-content-on-color">⚡</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Fast Development</h3>
              <p className="text-fg-secondary">
                Built with Next.js 14, TypeScript, and Tailwind CSS for rapid prototyping and development.
              </p>
            </div>

            <div className="rounded-large border border-border-primary bg-bg-secondary p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-medium bg-bg-warning">
                <span className="text-xl text-content-on-color">🧩</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Component Library</h3>
              <p className="text-fg-secondary">
                Pre-built ShadCN UI components customized with our design tokens for consistency.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 pt-16">
            <h2 className="text-3xl font-semibold">Explore the Design System</h2>
            <p className="text-fg-secondary">
              Check out our comprehensive style guide to see all design tokens, components, and patterns in action.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link href="/styleguide">View Style Guide</Link>
              </Button>
              
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/shadcn">shadcn/ui Components</Link>
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="https://github.com/kunjprkh/ruwa-health" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="border-t border-border-primary pt-16">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-fg-success"></div>
                <span className="text-sm text-fg-secondary">Design Tokens</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-fg-success"></div>
                <span className="text-sm text-fg-secondary">ShadCN UI</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-fg-success"></div>
                <span className="text-sm text-fg-secondary">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-fg-success"></div>
                <span className="text-sm text-fg-secondary">Dark/Light Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}