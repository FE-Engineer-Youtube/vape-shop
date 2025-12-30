import type { Route } from "./+types/home";
import { Container, Title, Text, Stack, Group, Box } from "@mantine/core";
import { checkAgeVerification } from "~/lib/age-verification";

export function clientLoader() {
  return checkAgeVerification();
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Plug - Smoke & Vape Shop" },
    {
      name: "description",
      content:
        "Anything and everything for your Smoke and Vape needs at the LOWEST prices! 6 Amazing Locations in South Florida!",
    },
  ];
}

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl" align="center">
        <Stack gap="md" align="center">
          <Title order={1} ta="center">
            The Plug
          </Title>
          <Title order={2} ta="center" c="dimmed">
            Smoke & Vape Shop
          </Title>
        </Stack>

        <Text size="lg" ta="center" fw={500} c="teal" mt="md">
          Anything and everything for your Smoke and Vape needs at the LOWEST
          prices!
        </Text>

        <Box>
          <Text size="lg" ta="center" fw={600} c="blue">
            6 Amazing Locations in South Florida!
          </Text>
        </Box>

        <Stack gap="xl" style={{ maxWidth: "800px" }} align="center">
          <Title order={2} ta="center">
            We have a diverse selection of CBD, Delta 8, Glass, Grinders,
            Hookah, Rolling Trays, Vapes, and so much more
          </Title>

          <Title order={2} ta="center">
            We strive to provide the most cutting edge products on the market!
          </Title>
        </Stack>

        <Group gap="xs" justify="center">
          <Text size="2rem">🔌</Text>
          <Text size="2rem">🔌</Text>
          <Text size="2rem">🔌</Text>
          <Text size="2rem">🔌</Text>
          <Text size="2rem">🔌</Text>
          <Text size="2rem">🔌</Text>
        </Group>

        <Text size="lg" ta="center" fw={600}>
          6 Plugs to choose from!
        </Text>
      </Stack>
    </Container>
  );
}
