import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfoliohassoun.web.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          fr: "https://portfoliohassoun.web.app",
          en: "https://portfoliohassoun.web.app/en"
        }
      }
    },
    {
      url: "https://portfoliohassoun.web.app/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: "https://portfoliohassoun.web.app",
          en: "https://portfoliohassoun.web.app/en"
        }
      }
    }
  ];
}
