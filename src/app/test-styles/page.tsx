export default function TestStylesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Style Test Page</h1>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shadcn/UI Colors</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-background border rounded">Background</div>
            <div className="p-4 bg-card text-card-foreground border rounded">Card</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">Primary</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">Secondary</div>
            <div className="p-4 bg-muted text-muted-foreground rounded">Muted</div>
            <div className="p-4 bg-accent text-accent-foreground rounded">Accent</div>
            <div className="p-4 bg-destructive text-destructive-foreground rounded">Destructive</div>
            <div className="p-4 border-2 border-border rounded">Border</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ruwa Semantic Colors</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-bg-primary text-fg-primary rounded">Primary BG</div>
            <div className="p-4 bg-bg-secondary text-fg-secondary rounded">Secondary BG</div>
            <div className="p-4 bg-bg-tertiary text-fg-tertiary rounded">Tertiary BG</div>
            <div className="p-4 bg-bg-accent text-white rounded">Accent BG</div>
            <div className="p-4 bg-bg-error text-white rounded">Error BG</div>
            <div className="p-4 bg-bg-warning text-black rounded">Warning BG</div>
            <div className="p-4 bg-bg-success text-white rounded">Success BG</div>
            <div className="p-4 bg-bg-pale rounded">Pale BG</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ruwa Primitive Colors</h2>
          <div className="grid grid-cols-6 gap-2">
            <div className="p-2 bg-gray-100 text-black rounded text-sm">Gray 100</div>
            <div className="p-2 bg-gray-80 text-black rounded text-sm">Gray 80</div>
            <div className="p-2 bg-gray-60 text-white rounded text-sm">Gray 60</div>
            <div className="p-2 bg-gray-40 text-white rounded text-sm">Gray 40</div>
            <div className="p-2 bg-gray-20 text-white rounded text-sm">Gray 20</div>
            <div className="p-2 bg-gray-black text-white rounded text-sm">Gray Black</div>
            
            <div className="p-2 bg-blue-50 text-white rounded text-sm">Blue 50</div>
            <div className="p-2 bg-green-50 text-white rounded text-sm">Green 50</div>
            <div className="p-2 bg-red-50 text-white rounded text-sm">Red 50</div>
            <div className="p-2 bg-orange-50 text-white rounded text-sm">Orange 50</div>
            <div className="p-2 bg-yellow-50 text-black rounded text-sm">Yellow 50</div>
            <div className="p-2 bg-magenta-50 text-white rounded text-sm">Magenta 50</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Text Utilities</h2>
          <div className="space-y-2">
            <p className="text-fg-primary">Primary Text (fg-primary)</p>
            <p className="text-fg-secondary">Secondary Text (fg-secondary)</p>
            <p className="text-fg-tertiary">Tertiary Text (fg-tertiary)</p>
            <p className="text-muted-foreground">Muted Text (muted-foreground)</p>
          </div>
        </section>
      </div>
    </main>
  );
}