export type Podcast = {
  id: string;
  guestName: string;
  role: string;
  company: string;
  quote: string;
  videoUrl: string;
  imageUrl: string;
};

export const podcasts: Podcast[] = [
  {
    id: "gaurish-rubrik",
    guestName: "Gaurish",
    role: "SWE",
    company: "Rubrik",
    quote: "I cracked Google FTE, but chose Rubrik. Startups teach you ownership that big tech often can't.",
    videoUrl: "https://youtube.com/@SiliconStories", // Update with real link
    imageUrl: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36&w=256&q=75",
  },
  {
    id: "muskan-microsoft",
    guestName: "Muskan",
    role: "SDE",
    company: "Microsoft",
    quote: "Microsoft asks standard patterns. If you master the top 100 questions on the Silicon Sheet, you are safe.",
    videoUrl: "https://youtube.com/@SiliconStories",
    imageUrl: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108377-be9c29b29330&w=256&q=75",
  },
  {
    id: "parul-flipkart",
    guestName: "Parul",
    role: "SDE",
    company: "Flipkart",
    quote: "The Machine Coding round is the game changer. Your code needs to be modular, not just functional.",
    videoUrl: "https://youtube.com/@SiliconStories",
    imageUrl: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573496359142-b8d87734a5a2&w=256&q=75",
  },
  {
    id: "kumar-paypal",
    guestName: "Kumar Alankrit", // Assumed name based on your role description
    role: "SDE",
    company: "PayPal",
    quote: "Having Walmart and Nokia on my resume helped, but System Design is what actually got me the offer.",
    videoUrl: "https://youtube.com/@SiliconStories",
    imageUrl: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde&w=256&q=75",
  },
  {
    id: "om-mastercard",
    guestName: "Om Soni",
    role: "SDE",
    company: "Mastercard",
    quote: "Don't ignore Low Level Design (LLD). In Fintech, structure matters more than speed.",
    videoUrl: "https://youtube.com/@SiliconStories",
    imageUrl: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1507003211169-0a1dd7228f2d&w=256&q=75",
  },
];