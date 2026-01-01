import {
  Container,
  Text,
  Stack,
  Group,
  Anchor,
  Box,
  Divider,
} from "@mantine/core";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        marginTop: "auto",
      }}
    >
      <Box
        style={{
          height: "3px",
          width: "100%",
          background: `linear-gradient(to right, var(--mantine-color-teal-5), var(--mantine-color-blue-5))`,
        }}
      />
      <Container py="xl">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <Stack gap="xs">
              <Text fw={600} size="lg">
                The Plug
              </Text>
              <Text size="sm" c="dimmed">
                Smoke & Vape Shop
              </Text>
              <Text size="sm">
                <Anchor href="mailto:plugvapeshop@gmail.com">
                  plugvapeshop@gmail.com
                </Anchor>
              </Text>
            </Stack>
            <Stack gap="xs">
              <Text fw={600} size="sm">
                Quick Links
              </Text>
              <Anchor component={Link} to="/" size="sm" c="dimmed">
                Home
              </Anchor>
              <Anchor component={Link} to="/terms" size="sm" c="dimmed">
                Terms & Conditions
              </Anchor>
              <Anchor component={Link} to="/privacy" size="sm" c="dimmed">
                Privacy Policy
              </Anchor>
              <Anchor component={Link} to="/coa" size="sm" c="dimmed">
                COA Information
              </Anchor>
              <Anchor component={Link} to="/contact" size="sm" c="dimmed">
                Contact Us
              </Anchor>
            </Stack>
          </Group>
          <Divider color="blue" />
          <Text size="xs" c="dimmed" ta="center" pt="md">
            © {new Date().getFullYear()} The Plug Smoke & Vape Shop. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
