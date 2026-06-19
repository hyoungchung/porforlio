import { cn } from "@/lib/utils";

type GlassLayerProps = {
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
  tint?: "white" | "sky" | "warm";
};

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
};

const tintMap = {
  white: "bg-white/35 border-white/60",
  sky: "bg-sky-200/30 border-sky-100/50",
  warm: "bg-[#E8DCC8]/40 border-white/50",
};

export function GlassLayer({
  className,
  blur = "lg",
  tint = "white",
}: GlassLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute border shadow-[0_8px_32px_rgba(44,24,16,0.05)]",
        blurMap[blur],
        tintMap[tint],
        className
      )}
    />
  );
}
