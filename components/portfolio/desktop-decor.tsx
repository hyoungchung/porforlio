import { FolderIcon } from "@/components/portfolio/folder-icon";
import { cn } from "@/lib/utils";

function FileThumbnail({
  label,
  color,
  className,
}: {
  label: string;
  color: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div
        className="size-10 rounded-md border border-white/80 shadow-sm lg:size-12"
        style={{ background: color }}
      />
      <span className="max-w-[4rem] truncate text-center text-[8px] text-[#5C4A3A]">
        {label}
      </span>
    </div>
  );
}

export function DesktopDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FolderIcon
        label="UX Research"
        size="sm"
        className="absolute left-[2%] top-[6%] rotate-[-8deg] opacity-80 lg:left-[4%] lg:top-[8%]"
      />
      <FolderIcon
        label="UI Design"
        size="sm"
        className="absolute right-[3%] top-[4%] rotate-[6deg] opacity-75 lg:right-[6%]"
      />
      <FolderIcon
        label="portfolio"
        size="md"
        className="absolute bottom-[8%] left-[2%] rotate-[4deg] opacity-70 lg:bottom-[10%] lg:left-[5%]"
      />

      <FileThumbnail
        label="case_study.pdf"
        color="linear-gradient(135deg, #D4E8F0 0%, #7EC8E3 100%)"
        className="absolute right-[4%] bottom-[18%] rotate-[-4deg] opacity-80 lg:right-[8%]"
      />
      <FileThumbnail
        label="wireframe.fig"
        color="linear-gradient(135deg, #F5E6D3 0%, #D4A574 100%)"
        className="absolute left-[18%] bottom-[6%] hidden rotate-[2deg] opacity-70 lg:flex"
      />
    </div>
  );
}
