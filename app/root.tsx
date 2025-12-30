// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { theme } from "./theme";

export default function Root() {
  return (
    <html lang="en" {...mantineHtmlProps} style={{ height: "100%" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <MantineProvider theme={theme}>
          <Header />
          <div style={{ flex: "1 0 auto" }}>
            <Outlet />
          </div>
          <Footer />
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
