export default function TestPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Color Test Page</h1>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Standard shadcn/ui colors:</h2>
        <div className="p-4 bg-background border">bg-background</div>
        <div className="p-4 bg-card border">bg-card</div>
        <div className="p-4 bg-primary text-primary-foreground">bg-primary</div>
        <div className="p-4 bg-secondary text-secondary-foreground">bg-secondary</div>
        <div className="p-4 bg-muted text-muted-foreground">bg-muted</div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Hardcoded colors (from BiomarkerTable):</h2>
        <div className="p-4 bg-[#1a1a1a] text-white border">bg-[#1a1a1a]</div>
        <div className="p-4 bg-[#111] text-white border">bg-[#111]</div>
        <div className="p-4 text-[#888] border">text-[#888]</div>
        <div className="p-4 border border-[#333]">border-[#333]</div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Design tokens:</h2>
        <div className="p-4 bg-bg-primary text-white border">bg-bg-primary</div>
        <div className="p-4 bg-bg-secondary text-white border">bg-bg-secondary</div>
        <div className="p-4 text-fg-primary border">text-fg-primary</div>
        <div className="p-4 text-fg-secondary border">text-fg-secondary</div>
        <div className="p-4 border border-border-primary">border-border-primary</div>
      </div>
    </div>
  );
}