import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/70 bg-white/45 p-8 shadow-[0_8px_40px_rgba(44,24,16,0.06)] backdrop-blur-xl md:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}
