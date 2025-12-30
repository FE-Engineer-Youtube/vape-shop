import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("coa", "routes/coa.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
