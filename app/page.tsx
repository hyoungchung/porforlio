import Image from "next/image";
import Link from "next/link";
import { GlassLayer } from "@/components/portfolio/glass-layer";
import { MouseLight } from "@/components/portfolio/mouse-light";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { MagicCard } from "@/components/portfolio/magic-card";
import {
  BubbleClusterPreview,
  ChatThreadPreview,
  InboxListPreview,
  InputBarPreview,
  NotificationPreview,
  ReactionsPreview,
} from "@/components/portfolio/message-previews";
import { Button } from "@/components/ui/button";
import { works } from "@/lib/works";
import { cn } from "@/lib/utils";

function MessageZoneFill({
  preview,
  className,
}: {
  preview: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_32px_rgba(44,24,16,0.08)] backdrop-blur-sm",
        className
      )}
    >
      {preview}
    </div>
  );
}

function WorkCard({
  slug,
  title,
  description,
  accent,
  thumbnail,
  compact = false,
}: {
  slug: string;
  title: string;
  description: string;
  accent: string;
  thumbnail: string;
  compact?: boolean;
}) {
  return (
    <Link href={`/works/${slug}`} className="block h-full">
      <MagicCard
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/30 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5",
          compact && "rounded-[1.25rem]"
        )}
        gradientColor={`${accent}44`}
      >
        <div
          className={cn(
            "relative w-full shrink-0 overflow-hidden bg-[#f3ede3]",
            compact ? "h-36" : "h-52"
          )}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-center"
            sizes={compact ? "33vw" : "360px"}
          />
        </div>
        <div className={cn("flex flex-1 flex-col", compact ? "p-3" : "p-5")}>
          <h3
            className={cn(
              "font-display font-thin leading-tight tracking-wide text-portfolio-deep",
              compact ? "text-[1rem]" : "text-[1.35rem]"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "font-body mt-1 flex-1 font-light leading-snug text-portfolio-muted",
              compact ? "line-clamp-1 text-[11px]" : "text-[14px] leading-relaxed"
            )}
          >
            {description}
          </p>
          <p
            className={cn(
              "font-mono font-normal tracking-[0.2em] text-portfolio-amber uppercase",
              compact ? "mt-1.5 text-[8px]" : "mt-2 text-[8px]"
            )}
          >
            → View project
          </p>
        </div>
      </MagicCard>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="relative h-dvh overflow-hidden text-portfolio-text">
      {/* ── Fixed background ── */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero-gradient-mesh.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]" />
      </div>

      {/* ── Mouse-follow light spot ── */}
      <MouseLight />

      {/* ── Color blob overlays ── */}
      <GlassLayer
        tint="warm"
        blur="xl"
        className="pointer-events-none fixed -left-[10%] top-[18%] z-0 h-[52%] w-[42%] rounded-[5rem] opacity-50"
      />
      <GlassLayer
        tint="sky"
        blur="xl"
        className="pointer-events-none fixed right-[1%] top-[6%] z-0 h-[68%] w-[40%] rounded-[4rem] opacity-40"
      />
      <GlassLayer
        tint="white"
        blur="lg"
        className="pointer-events-none fixed bottom-[3%] left-[26%] z-0 h-[34%] w-[48%] rounded-full opacity-30"
      />

      {/* ── Empty-zone messaging decor (fills viewport margins) ── */}
      <div className="pointer-events-none fixed inset-0 z-[4] hidden lg:block">
        <BlurFade delay={0.04}>
          <MessageZoneFill
            className="left-[1.5%] top-[28%] h-40 w-32 rotate-[-5deg] opacity-45 xl:left-[3%] xl:h-44 xl:w-36"
            preview={<InboxListPreview className="h-full" />}
          />
        </BlurFade>
        <BlurFade delay={0.10}>
          <MessageZoneFill
            className="bottom-[18%] left-[2%] h-28 w-36 rotate-[2deg] opacity-40 xl:bottom-[20%] xl:left-[4%]"
            preview={<InputBarPreview className="h-full" />}
          />
        </BlurFade>
        <BlurFade delay={0.16}>
          <MessageZoneFill
            className="right-[2%] top-[10%] h-32 w-32 rotate-[3deg] opacity-45 xl:right-[4%] xl:h-36 xl:w-36"
            preview={<NotificationPreview className="h-full" />}
          />
        </BlurFade>
        <BlurFade delay={0.22}>
          <MessageZoneFill
            className="bottom-[6%] right-[3%] h-28 w-32 rotate-[-3deg] opacity-40 xl:bottom-[8%] xl:right-[5%]"
            preview={<ReactionsPreview className="h-full" />}
          />
        </BlurFade>
        <BlurFade delay={0.28}>
          <MessageZoneFill
            className="right-[14%] top-[42%] h-24 w-28 rotate-[4deg] opacity-35 xl:right-[16%]"
            preview={<BubbleClusterPreview className="h-full" />}
          />
        </BlurFade>
        <BlurFade delay={0.34}>
          <MessageZoneFill
            className="left-[12%] bottom-[8%] h-24 w-28 rotate-[-2deg] opacity-35 xl:left-[14%]"
            preview={<ChatThreadPreview className="h-full" />}
          />
        </BlurFade>
      </div>

      {/* ── First viewport: Hero + About + Works ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 py-5 lg:gap-5 lg:px-10 lg:py-6">
        <div className="flex w-full max-w-[1100px] flex-1 min-h-0 gap-4 lg:gap-5">
          {/* ── LEFT card: Avatar + Name ── */}
          <section
            id="hero"
            className="relative flex w-[42%] shrink-0 flex-col overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-sky-100/20" />

            <div className="relative z-10 flex h-full flex-col p-4 lg:p-5">
              <BlurFade delay={0.10} className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-normal tracking-[0.36em] text-portfolio-muted uppercase">
                  UX Designer
                </span>
                <span className="font-mono text-[10px] font-normal tracking-[0.18em] text-portfolio-muted/40 uppercase">
                  2026
                </span>
              </BlurFade>

              <BlurFade delay={0.20} className="relative min-h-0 flex-1">
                <Image
                  src="/avatar-heeyoung.png"
                  alt="Heeyoung avatar"
                  fill
                  className="object-contain object-bottom"
                  style={{
                    mixBlendMode: "multiply",
                    maskImage:
                      "radial-gradient(ellipse 78% 88% at 50% 46%, black 50%, transparent 78%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 78% 88% at 50% 46%, black 50%, transparent 78%)",
                  }}
                  priority
                />
              </BlurFade>

              <BlurFade delay={0.33} className="relative">
                <div
                  aria-hidden="true"
                  className="text-stroke pointer-events-none absolute inset-0 flex translate-x-[4px] translate-y-[4px] select-none flex-col opacity-[0.1]"
                >
                  <span className="font-display block text-[clamp(3.2rem,7vw,5.2rem)] font-thin leading-[0.86] tracking-wide">
                    Hee
                  </span>
                  <span className="font-display block text-[clamp(3.2rem,7vw,5.2rem)] font-thin leading-[0.86] tracking-wide">
                    young
                  </span>
                </div>
                <h1 className="relative flex flex-col" aria-label="Heeyoung">
                  <span className="font-display block text-[clamp(3.2rem,7vw,5.2rem)] font-thin leading-[0.86] tracking-wide text-portfolio-deep">
                    Hee
                  </span>
                  <span className="font-display block text-[clamp(3.2rem,7vw,5.2rem)] font-thin leading-[0.86] tracking-wide text-portfolio-amber">
                    young
                  </span>
                </h1>
              </BlurFade>

              <BlurFade delay={0.46} className="mt-4 flex items-end justify-between gap-3">
                <div className="space-y-2">
                  <p className="font-body text-[13px] font-light italic leading-snug text-portfolio-muted">
                    I design how people connect.
                  </p>
                  <Button
                    asChild
                    className="font-body h-auto rounded-full bg-portfolio-deep px-5 py-1.5 text-[13px] font-normal tracking-[0.03em] text-white hover:bg-portfolio-text/90"
                  >
                    <a href="mailto:hyoung.chung@samsung.com">Contact →</a>
                  </Button>
                </div>
                <div className="text-right">
                  <p className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-thin leading-none tracking-wide text-portfolio-text">
                    12<span className="text-portfolio-accent">+</span>
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] font-normal tracking-[0.24em] text-portfolio-muted/70 uppercase">
                    years exp.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>

          {/* ── RIGHT card: About ── */}
          <section
            id="about"
            className="relative flex flex-1 flex-col overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/28 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-tl from-sky-100/30 via-transparent to-white/40" />

            <div className="relative z-10 flex h-full flex-col p-5 lg:p-6">
              <BlurFade delay={0.15} className="mb-5 flex items-end justify-between">
                <div>
                  <p className="mb-1 font-mono text-[10px] font-normal tracking-[0.34em] text-portfolio-muted/60 uppercase">
                    About me
                  </p>
                  <div className="relative">
                    <h2
                      aria-hidden="true"
                      className="font-display text-stroke-sm pointer-events-none absolute translate-x-[3px] translate-y-[3px] select-none text-[clamp(2rem,4.5vw,3rem)] font-thin leading-none tracking-wide opacity-[0.1]"
                    >
                      Hello.
                    </h2>
                    <h2 className="font-display relative text-[clamp(2rem,4.5vw,3rem)] font-thin leading-none tracking-wide text-portfolio-deep">
                      Hello.
                    </h2>
                  </div>
                </div>
                <span className="font-body mb-0.5 text-[clamp(1rem,1.8vw,1.3rem)] font-light italic leading-none text-portfolio-accent">
                  INTJ
                </span>
              </BlurFade>

              <div className="flex-1 space-y-4">
                <BlurFade delay={0.27}>
                  <p className="font-body text-[20px] font-light leading-[1.6] text-portfolio-text">
                    I&apos;m Heeyoung — a UX Designer who spent 12 years at
                    Samsung focused on messaging experiences.
                  </p>
                </BlurFade>
                <BlurFade delay={0.38}>
                  <p className="font-body text-[17px] font-light leading-[1.75] text-portfolio-muted">
                    Messaging is more than sending text. It&apos;s the pause
                    before a reply, the read receipt that carries weight, the
                    moment a conversation starts to feel natural. I focus on
                    those details — removing friction, building trust, and making
                    technology disappear so the people don&apos;t.
                  </p>
                </BlurFade>
                <BlurFade delay={0.49}>
                  <p className="font-body text-[15px] font-light italic leading-[1.75] text-portfolio-muted/70">
                    The best design often goes unnoticed — and I think that&apos;s
                    the point.
                  </p>
                </BlurFade>
              </div>

              <BlurFade delay={0.60} className="mt-5 grid grid-cols-3 gap-3">
                <MagicCard
                  className="rounded-2xl border border-white/50 bg-white/30 px-4 py-3 backdrop-blur-sm"
                  gradientColor="rgba(196,149,106,0.28)"
                >
                  <p className="font-mono text-[9px] font-normal tracking-[0.24em] text-portfolio-muted/70 uppercase">
                    Joined
                  </p>
                  <p className="font-display mt-1.5 text-[1.5rem] font-thin leading-none tracking-wide text-portfolio-deep">
                    2014
                  </p>
                  <p className="font-body mt-1 text-[13px] font-light text-portfolio-muted">
                    Samsung
                  </p>
                </MagicCard>

                <MagicCard
                  className="rounded-2xl border border-white/50 bg-white/30 px-4 py-3 backdrop-blur-sm"
                  gradientColor="rgba(91,181,217,0.28)"
                >
                  <p className="font-mono text-[9px] font-normal tracking-[0.24em] text-portfolio-muted/70 uppercase">
                    Focus
                  </p>
                  <p className="font-display mt-1.5 text-[1.25rem] font-thin leading-tight tracking-wide text-portfolio-accent">
                    Messaging
                  </p>
                  <p className="font-body mt-1 text-[13px] font-light text-portfolio-muted">
                    UX Design
                  </p>
                </MagicCard>

                <MagicCard
                  className="rounded-2xl border border-white/50 bg-white/30 px-4 py-3 backdrop-blur-sm"
                  gradientColor="rgba(196,149,106,0.20)"
                >
                  <p className="font-mono text-[9px] font-normal tracking-[0.24em] text-portfolio-muted/70 uppercase">
                    Contact
                  </p>
                  <a
                    href="mailto:hyoung.chung@samsung.com"
                    className="font-body mt-1.5 block text-[13px] font-light leading-snug text-portfolio-amber hover:underline"
                  >
                    hyoung.chung
                    <br />
                    @samsung.com
                  </a>
                </MagicCard>
              </BlurFade>
            </div>
          </section>
        </div>

        {/* ── Works: 3 cards on first screen ── */}
        <section id="works" className="w-full max-w-[1100px] shrink-0">
          <BlurFade delay={0.65} className="mb-3 flex items-end justify-between">
            <div>
              <p className="mb-0.5 font-mono text-[9px] font-normal tracking-[0.34em] text-portfolio-muted/60 uppercase">
                Works
              </p>
              <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-thin leading-none tracking-wide text-portfolio-deep">
                Selected Work.
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {works.map((work, index) => (
              <BlurFade key={work.slug} delay={0.72 + index * 0.08}>
                <WorkCard
                  slug={work.slug}
                  title={work.title}
                  description={work.description}
                  accent={work.accent}
                  thumbnail={work.thumbnail}
                  compact
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
