"use client";

import { useEffect } from "react";

export function TallyEmbed() {
  useEffect(() => {
    // Load Tally embed script for dynamic height & transparent background
    if (typeof window !== "undefined") {
      if ((window as unknown as Record<string, unknown>)["Tally"]) {
        (window as unknown as Record<string, { loadEmbeds: () => void }>)["Tally"].loadEmbeds();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/EkAxlX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="320"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Contact form"
      className="w-full"
    />
  );
}
