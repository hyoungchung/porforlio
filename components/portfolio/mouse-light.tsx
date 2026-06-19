"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function MouseLight() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const SIZE_OUTER = 700;
    const SIZE_INNER = 280;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curOuterX = mouseX;
    let curOuterY = mouseY;
    let curInnerX = mouseX;
    let curInnerY = mouseY;

    // Start centered
    gsap.set(outer, { x: curOuterX - SIZE_OUTER / 2, y: curOuterY - SIZE_OUTER / 2 });
    gsap.set(inner, { x: curInnerX - SIZE_INNER / 2, y: curInnerY - SIZE_INNER / 2 });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // GSAP ticker: outer follows lazily, inner follows a bit faster
    const tick = () => {
      curOuterX += (mouseX - curOuterX) * 0.06;
      curOuterY += (mouseY - curOuterY) * 0.06;
      curInnerX += (mouseX - curInnerX) * 0.12;
      curInnerY += (mouseY - curInnerY) * 0.12;

      gsap.set(outer, {
        x: curOuterX - SIZE_OUTER / 2,
        y: curOuterY - SIZE_OUTER / 2,
      });
      gsap.set(inner, {
        x: curInnerX - SIZE_INNER / 2,
        y: curInnerY - SIZE_INNER / 2,
      });
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer large soft glow — slow follow */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[4] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,246,230,0.38) 0%, rgba(255,238,210,0.14) 40%, transparent 68%)",
        }}
      />
      {/* Inner bright spot — slightly faster follow */}
      <div
        ref={innerRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[4] h-[280px] w-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,252,244,0.55) 0%, rgba(255,248,235,0.22) 45%, transparent 70%)",
        }}
      />
    </>
  );
}
