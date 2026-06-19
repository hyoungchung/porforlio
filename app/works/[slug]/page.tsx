import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { Button } from "@/components/ui/button";
import { getWorkBySlug, works } from "@/lib/works";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Work Not Found | Heeyoung" };
  }

  return {
    title: `${work.title} | Heeyoung`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="relative min-h-dvh text-portfolio-text">
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

      <div className="relative z-10 mx-auto max-w-[800px] px-6 py-10 lg:px-10 lg:py-14">
        <BlurFade delay={0.05}>
          <Link
            href="/#works"
            className="font-mono inline-flex items-center gap-2 text-[11px] font-normal tracking-[0.22em] text-portfolio-muted uppercase transition-colors hover:text-portfolio-deep"
          >
            ← 모든 작업물 보기
          </Link>
        </BlurFade>

        <article className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/30 backdrop-blur-md">
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-sky-100/20" />

          <div className="relative z-10 p-6 lg:p-10">
            <BlurFade delay={0.12}>
              <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem] bg-[#f3ede3]">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  className="object-cover object-center"
                  sizes="800px"
                  priority
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.15} className="mt-8">
              <p className="mb-2 font-mono text-[10px] font-normal tracking-[0.34em] text-portfolio-muted/60 uppercase">
                Work
              </p>
              <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-thin leading-none tracking-wide text-portfolio-deep">
                {work.title}
              </h1>
              <p className="font-body mt-3 text-[16px] font-light leading-relaxed text-portfolio-muted">
                {work.description}
              </p>
            </BlurFade>

            <BlurFade delay={0.28} className="mt-8">
              <p className="font-body text-[17px] font-light leading-[1.8] text-portfolio-text">
                {work.overview}
              </p>
            </BlurFade>

            <BlurFade delay={0.40} className="mt-10 flex flex-wrap gap-3">
              {work.links.map((link) => (
                <Button
                  key={link.url}
                  asChild
                  variant="outline"
                  className="font-body rounded-full border-white/60 bg-white/40 px-6 py-2 text-[14px] font-light tracking-wide text-portfolio-deep backdrop-blur-sm hover:bg-white/60"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} ↗
                  </a>
                </Button>
              ))}
            </BlurFade>
          </div>
        </article>
      </div>
    </main>
  );
}
