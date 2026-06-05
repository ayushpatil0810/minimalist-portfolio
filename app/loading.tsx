export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="max-w-2xl mx-auto px-6 pt-6 pb-12 md:pt-10 md:pb-24">
        {/* Nav skeleton */}
        <div className="flex items-center justify-between py-6 w-full mb-8">
          <div className="h-5 w-24 bg-muted/60 animate-pulse rounded-sm" />
          <div className="flex items-center gap-4">
            <div className="h-4 w-8 bg-muted/60 animate-pulse rounded-sm" />
            <div className="h-8 w-8 bg-muted/60 animate-pulse rounded-full" />
          </div>
        </div>

        {/* Hero skeleton */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-28 h-28 rounded-full bg-muted/60 animate-pulse shrink-0" />
            <div className="flex flex-col gap-3">
              <div className="h-8 w-40 bg-muted/60 animate-pulse rounded-sm" />
              <div className="h-4 w-28 bg-muted/40 animate-pulse rounded-sm" />
              <div className="h-3 w-24 bg-muted/30 animate-pulse rounded-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <div className="h-9 w-3/4 bg-muted/60 animate-pulse rounded-sm" />
            <div className="h-9 w-1/2 bg-muted/40 animate-pulse rounded-sm" />
          </div>
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-muted/40 animate-pulse" />
            ))}
          </div>
          <div className="h-9 w-32 bg-muted/60 animate-pulse rounded-sm" />
        </div>

        {/* Activity skeleton */}
        <div className="mb-24">
          <div className="h-3 w-16 bg-muted/40 animate-pulse rounded-sm mb-10" />
          <div className="h-28 w-full bg-muted/30 animate-pulse rounded-sm" />
        </div>

        {/* Projects skeleton */}
        <div className="mb-24">
          <div className="h-3 w-16 bg-muted/40 animate-pulse rounded-sm mb-10" />
          <div className="flex flex-col gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-5 border border-border/30 flex flex-col gap-3">
                <div className="h-5 w-48 bg-muted/60 animate-pulse rounded-sm" />
                <div className="h-4 w-full bg-muted/40 animate-pulse rounded-sm" />
                <div className="h-4 w-3/4 bg-muted/30 animate-pulse rounded-sm" />
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 w-16 bg-muted/40 animate-pulse rounded-sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About skeleton */}
        <div className="mb-24">
          <div className="h-3 w-12 bg-muted/40 animate-pulse rounded-sm mb-8" />
          <div className="flex flex-col gap-4">
            <div className="h-4 w-full bg-muted/40 animate-pulse rounded-sm" />
            <div className="h-4 w-5/6 bg-muted/30 animate-pulse rounded-sm" />
            <div className="h-4 w-4/5 bg-muted/30 animate-pulse rounded-sm" />
          </div>
        </div>
      </main>
    </div>
  );
}
