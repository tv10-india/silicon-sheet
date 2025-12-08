import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://silicon-sheet.vercel.app"; // Replace with your actual Vercel domain later

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sheet`,
      lastModified: new Date(),
      changeFrequency: "daily", // The sheet updates often
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guidance`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}