"use client";

import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 140,
  gradientColor = "rgba(196,149,106,0.22)",
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const { left, top } = ref.current.getBoundingClientRect();
      ref.current.style.setProperty("--magic-x", `${e.clientX - left}px`);
      ref.current.style.setProperty("--magic-y", `${e.clientY - top}px`);
    },
    [],
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("group relative overflow-hidden", className)}
    >
      {children}
      {/* spotlight overlay — visible only on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at var(--magic-x, 50%) var(--magic-y, 50%), ${gradientColor}, transparent 100%)`,
        }}
      />
    </div>
  );
}
