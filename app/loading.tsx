export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-[1px] bg-foreground/20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-foreground animate-pulse" />
        </div>
        <span className="text-[0.65rem] font-mono tracking-widest text-muted-foreground/60 uppercase animate-pulse">
          Loading
        </span>
      </div>
    </div>
  );
}
