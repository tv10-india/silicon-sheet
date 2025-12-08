import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://silicon-sheet.vercel.app"; // Replace with your actual Vercel domain later

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Keep bots away from API and private areas
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}