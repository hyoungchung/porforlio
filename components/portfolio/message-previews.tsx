import { cn } from "@/lib/utils";

export function ChatThreadPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-end gap-1.5 bg-gradient-to-br from-[#E8F4FD] to-[#BDD9F0] px-2.5 pb-2 pt-3",
        className
      )}
    >
      <div className="ml-auto flex max-w-[78%] flex-col items-end gap-0.5">
        <div className="rounded-2xl rounded-tr-sm bg-[#0A84FF] px-2 py-1">
          <div className="h-1.5 w-[80%] rounded-full bg-white/85" />
        </div>
        <div className="flex items-center gap-0.5 pr-0.5">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 3l2 2 3-4" stroke="#0A84FF" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M4 3l2 2 3-4" stroke="#0A84FF" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-white/80 px-2 py-1">
        <div className="h-1.5 w-[75%] rounded-full bg-slate-300" />
        <div className="mt-0.5 h-1.5 w-[50%] rounded-full bg-slate-200" />
      </div>
      <div className="flex w-9 items-center justify-center gap-0.5 rounded-full bg-white/70 py-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-slate-400" />
        ))}
      </div>
    </div>
  );
}

export function ReactionsPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center gap-2 bg-gradient-to-br from-[#FFF3E0] to-[#FFB74D] px-2.5 py-2",
        className
      )}
    >
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#FF9500] px-2 py-1.5">
        <div className="h-1.5 w-full rounded-full bg-white/80" />
        <div className="mt-0.5 h-1.5 w-[65%] rounded-full bg-white/60" />
      </div>
      <div className="ml-auto flex items-center gap-1 rounded-full border border-white/60 bg-white/80 px-2 py-0.5">
        <span className="text-[8px]">👍</span>
        <span className="font-mono text-[7px] text-slate-500">2</span>
        <span className="text-[8px]">❤️</span>
        <span className="font-mono text-[7px] text-slate-500">1</span>
      </div>
    </div>
  );
}

export function NotificationPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center gap-1.5 bg-gradient-to-br from-[#EDE7F6] to-[#B39DDB] px-2 py-2",
        className
      )}
    >
      <div className="rounded-xl bg-white/80 px-2 py-1.5 backdrop-blur-sm">
        <div className="flex items-start gap-1.5">
          <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#5E35B1]" />
          <div className="flex-1 space-y-0.5">
            <div className="h-1.5 w-[70%] rounded-full bg-slate-600" />
            <div className="h-1 w-full rounded-full bg-slate-300" />
            <div className="h-1 w-[55%] rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white/55 px-2 py-1 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0A84FF]" />
          <div className="h-1.5 flex-1 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

export function WorkPreviewBySlug({ slug }: { slug: string }) {
  switch (slug) {
    case "chat-redesign":
      return <ChatThreadPreview />;
    case "message-reactions":
      return <ReactionsPreview />;
    case "notification-system":
      return <NotificationPreview />;
    default:
      return null;
  }
}

/** Inbox list — fills left/right margin zones */
export function InboxListPreview({ className }: { className?: string }) {
  const rows = [
    { unread: true, w: "72%" },
    { unread: false, w: "55%" },
    { unread: false, w: "65%" },
    { unread: true, w: "48%" },
  ];

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-1.5 bg-gradient-to-b from-[#F5F9FC] to-[#D6EAF5] p-2.5",
        className
      )}
    >
      <div className="mb-0.5 flex items-center justify-between px-0.5">
        <div className="h-2 w-12 rounded-full bg-slate-400/60" />
        <div className="h-4 w-4 rounded-full bg-[#0A84FF]/20" />
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-2 rounded-xl px-2 py-1.5",
            row.unread ? "bg-white/80" : "bg-white/40"
          )}
        >
          <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-[#C4956A] to-[#E8DCC8]" />
          <div className="flex-1 space-y-0.5">
            <div className="h-1.5 w-[45%] rounded-full bg-slate-500/70" />
            <div
              className="h-1 rounded-full bg-slate-300/80"
              style={{ width: row.w }}
            />
          </div>
          {row.unread && (
            <div className="size-1.5 shrink-0 rounded-full bg-[#0A84FF]" />
          )}
        </div>
      ))}
    </div>
  );
}

/** Compose input bar — fills bottom margin zones */
export function InputBarPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-end bg-gradient-to-br from-[#EEF4F8] to-[#C2DFEF] p-2.5",
        className
      )}
    >
      <div className="mb-1.5 space-y-1">
        <div className="ml-auto max-w-[65%] rounded-2xl rounded-tr-sm bg-[#0A84FF] px-2 py-1">
          <div className="h-1 w-full rounded-full bg-white/80" />
        </div>
        <div className="max-w-[55%] rounded-2xl rounded-tl-sm bg-white/75 px-2 py-1">
          <div className="h-1 w-[80%] rounded-full bg-slate-300" />
        </div>
      </div>
      <div className="flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-2 py-1.5 backdrop-blur-sm">
        <div className="size-3.5 rounded-full bg-slate-200" />
        <div className="h-1.5 flex-1 rounded-full bg-slate-200/80" />
        <div className="flex size-4 items-center justify-center rounded-full bg-[#0A84FF]">
          <div className="size-1.5 rotate-45 border-r border-t border-white" />
        </div>
      </div>
    </div>
  );
}

/** Floating bubble cluster — minimal decor for tight gaps */
export function BubbleClusterPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-center gap-1 bg-transparent p-2",
        className
      )}
    >
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0A84FF]/90 px-2.5 py-1.5 shadow-sm">
        <div className="h-1.5 w-full rounded-full bg-white/85" />
        <div className="mt-0.5 h-1.5 w-[60%] rounded-full bg-white/60" />
      </div>
      <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/90 px-2.5 py-1.5 shadow-sm">
        <div className="h-1.5 w-[90%] rounded-full bg-slate-300" />
      </div>
      <div className="ml-4 flex w-10 items-center justify-center gap-0.5 rounded-full bg-white/80 py-1 shadow-sm">
        {[0, 1, 2].map((i) => (
          <div key={i} className="size-1 rounded-full bg-slate-400" />
        ))}
      </div>
    </div>
  );
}
