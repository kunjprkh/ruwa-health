import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Ruwa
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A modern design system built with Next.js 14, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/v0">View Design System</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/kunjprkh/ruwa-health" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}