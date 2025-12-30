// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useLocation,
} from "react-router";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { theme } from "./theme";
import { useEffect, useState } from "react";

function AgeVerificationGuard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      setIsChecking(false);
      return;
    }

    // Skip check for age verification and under-age pages
    if (
      location.pathname === "/age-verification" ||
      location.pathname === "/under-age"
    ) {
      setIsChecking(false);
      return;
    }

    // Check age verification status
    const ageVerified = sessionStorage.getItem("ageVerified");

    if (!ageVerified || ageVerified === "") {
      // Not verified, redirect to age verification
      navigate("/age-verification", { replace: true });
      setIsChecking(false);
      return;
    }

    if (ageVerified === "false") {
      // Under age, redirect to under-age page
      navigate("/under-age", { replace: true });
      setIsChecking(false);
      return;
    }

    // If ageVerified === "true", allow access
    setIsChecking(false);
  }, [navigate, location.pathname]);

  // Show nothing while checking (prevents flash of content)
  if (isChecking && typeof window !== "undefined") {
    return null;
  }

  return null;
}

export default function Root() {
  const location = useLocation();
  const isAgeVerificationPage =
    location.pathname === "/age-verification" ||
    location.pathname === "/under-age";

  return (
    <html lang="en" {...mantineHtmlProps} style={{ height: "100%" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <MantineProvider theme={theme}>
          <AgeVerificationGuard />
          {!isAgeVerificationPage && <Header />}
          <div style={{ flex: "1 0 auto" }}>
            <Outlet />
          </div>
          {!isAgeVerificationPage && <Footer />}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
