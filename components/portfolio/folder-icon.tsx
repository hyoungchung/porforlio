import { cn } from "@/lib/utils";

type FolderIconProps = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "w-14",
  md: "w-20",
  lg: "w-28",
};

export function FolderIcon({ label, className, size = "md" }: FolderIconProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <svg
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizeMap[size], "drop-shadow-sm")}
        aria-hidden="true"
      >
        <path
          d="M6 18C6 14.6863 8.68629 12 12 12H28C29.5 12 30.8 12.7 31.6 13.8L34.4 17.6C35.2 18.7 36.5 19.4 38 19.4H68C71.3137 19.4 74 22.0863 74 25.4V52C74 55.3137 71.3137 58 68 58H12C8.68629 58 6 55.3137 6 52V18Z"
          fill="#7EC8E3"
        />
        <path
          d="M6 22C6 19.7909 7.79086 18 10 18H30C31.6569 18 33.1569 18.8954 34 20.2361L35.5 22.7639C36.3431 24.1046 37.8431 25 39.5 25H70C72.2091 25 74 26.7909 74 29V52C74 55.3137 71.3137 58 68 58H12C8.68629 58 6 55.3137 6 52V22Z"
          fill="#5BB5D9"
        />
        <path
          d="M10 14H26C27.2 14 28.3 14.6 29 15.6L31 18.2C31.7 19.2 32.8 19.8 34 19.8H68"
          stroke="#A8DFF0"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {label ? (
        <span className="max-w-[5.5rem] truncate text-center text-[10px] leading-tight text-[#5C4A3A]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
