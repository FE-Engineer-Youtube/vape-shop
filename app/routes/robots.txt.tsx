import type { Route } from "./+types/robots.txt";

export async function loader({ request }: Route.LoaderArgs) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${new URL(request.url).origin}/sitemap.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

