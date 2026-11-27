import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astro-paper.pages.dev/",
    title: "Blogging with Alex",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
    author: "Sat Naing",
    profile: "https://alexbons.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/notsosaltyasiankid" },
    { name: "bluesky",        url: "https://bsky.app/profile/a-w-y-s.bsky.social" },
    { name: "linkedin", url: "https://www.linkedin.com/in/alex-bons-392548365/" },
    { name: "mail",     url: "mailto:alexwillembons@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});