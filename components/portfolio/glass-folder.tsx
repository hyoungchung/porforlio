import { cn } from "@/lib/utils";

type GlassFolderProps = {
  className?: string;
};

export function GlassFolder({ className }: GlassFolderProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(78vw,22rem)] -translate-x-1/2 -translate-y-[42%]",
        className
      )}
      aria-hidden="true"
    >
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute left-[12%] top-0 h-[18%] w-[38%] rounded-t-xl border border-white/60 bg-sky-300/45 shadow-sm backdrop-blur-md" />
        <div className="absolute inset-x-0 bottom-0 top-[12%] rounded-2xl border border-white/60 bg-sky-300/35 shadow-[0_16px_48px_rgba(91,181,217,0.25)] backdrop-blur-xl" />
      </div>
    </div>
  );
}
