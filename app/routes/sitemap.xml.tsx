import type { Route } from "./+types/sitemap.xml";

export async function loader({ request }: Route.LoaderArgs) {
  const baseUrl = new URL(request.url).origin;
  
  const routes = [
    { path: "", priority: "1.0", changefreq: "daily" }, // home
    { path: "contact", priority: "0.8", changefreq: "monthly" },
    { path: "terms", priority: "0.5", changefreq: "yearly" },
    { path: "privacy", priority: "0.5", changefreq: "yearly" },
    { path: "coa", priority: "0.7", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

