export interface WorkLink {
  label: string;
  url: string;
}

export interface Work {
  slug: string;
  title: string;
  description: string;
  accent: string;
  thumbnail: string;
  overview: string;
  links: WorkLink[];
}

export const works: Work[] = [
  {
    slug: "chat-redesign",
    title: "Chat Interface Redesign",
    description: "A cleaner conversation flow with clearer read states and typing cues.",
    accent: "#5BB5D9",
    thumbnail: "/work-chat-redesign.png",
    overview:
      "This project reimagined the core chat experience for a messaging app used by millions. The focus was on reducing visual noise while making conversation state — sent, delivered, read, typing — feel immediate and trustworthy. We simplified bubble hierarchy, refined spacing rhythm, and introduced subtle motion for status changes so users could follow threads without thinking about the interface.",
    links: [
      { label: "Behance", url: "https://www.behance.net/" },
      { label: "Dribbble", url: "https://dribbble.com/" },
    ],
  },
  {
    slug: "message-reactions",
    title: "Message Reactions",
    description: "Lightweight emoji reactions that keep conversations flowing naturally.",
    accent: "#C4956A",
    thumbnail: "/work-message-reactions.png",
    overview:
      "Reactions needed to feel expressive without interrupting the rhythm of a chat. I explored placement, scale, and feedback timing so a quick tap could acknowledge a message without opening a new layer of UI. The final pattern uses a compact reaction pill anchored to bubbles, with haptic-like visual feedback and accessible labels for screen readers.",
    links: [
      { label: "Behance", url: "https://www.behance.net/" },
      { label: "GitHub", url: "https://github.com/" },
    ],
  },
  {
    slug: "notification-system",
    title: "Notification System",
    description: "Push alerts and in-app badges designed to inform without overwhelming.",
    accent: "#9B8EC4",
    thumbnail: "/work-notification-system.png",
    overview:
      "Notifications are where messaging meets everyday life — they have to be useful, respectful, and scannable at a glance. I mapped notification types across lock screen, banner, and in-app surfaces, then defined a hierarchy for sender, preview text, and action affordances. The system balances urgency with calm defaults so users stay in control of when conversations pull them back in.",
    links: [
      { label: "Dribbble", url: "https://dribbble.com/" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
