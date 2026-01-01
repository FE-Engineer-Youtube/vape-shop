import {
  Container,
  Group,
  Text,
  Anchor,
  Box,
  Stack,
  Image,
} from "@mantine/core";
import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/coa", label: "COA Information" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header style={{ backgroundColor: "#ffffff" }}>
      <Container py="md">
        <Group justify="space-between" align="center" wrap="wrap" gap="md">
          <Anchor
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Group gap="sm" align="center">
              <Image
                src="/images/logo.jpeg"
                alt="The Plug Logo"
                h={40}
                w="auto"
                fit="contain"
              />
              <Text size="xl" fw={700} c="blue">
                Smoke & Vape Shop
              </Text>
            </Group>
          </Anchor>
          <Group gap="md" visibleFrom="sm" wrap="wrap">
            {navLinks.map((link) => (
              <Anchor
                key={link.to}
                component={Link}
                to={link.to}
                size="md"
                style={{
                  fontWeight: location.pathname === link.to ? 600 : 400,
                  textDecoration:
                    location.pathname === link.to ? "underline" : "none",
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
          <Stack gap="xs" hiddenFrom="sm" style={{ width: "100%" }}>
            {navLinks.map((link) => (
              <Anchor
                key={link.to}
                component={Link}
                to={link.to}
                size="sm"
                style={{
                  fontWeight: location.pathname === link.to ? 600 : 400,
                  textDecoration:
                    location.pathname === link.to ? "underline" : "none",
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </Group>
      </Container>
      <Box
        style={{
          height: "3px",
          width: "100%",
          background: `linear-gradient(to right, var(--mantine-color-teal-5), var(--mantine-color-blue-5))`,
        }}
      />
    </header>
  );
}
