import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/services/electrical-drawings", priority: 0.8 },
  { path: "/services/3d-walkthrough", priority: 0.8 },
  { path: "/how-we-work", priority: 0.7 },
  { path: "/projects", priority: 0.7 },
  { path: "/insights", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    priority: route.priority,
  }));
}
