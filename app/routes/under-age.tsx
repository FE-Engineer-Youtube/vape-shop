import type { Route } from "./+types/under-age";
import { Container, Title, Text, Stack, Paper } from "@mantine/core";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Age Restriction - The Plug Smoke & Vape Shop" },
    {
      name: "description",
      content: "You must be 21 years of age or older to access this website",
    },
  ];
}

export default function UnderAge() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Paper p="xl" withBorder>
          <Stack gap="md" align="center">
            <Title order={1} ta="center">
              Age Restriction
            </Title>
            <Text size="lg" ta="center">
              Sorry, you must be 21 to view the contents of this site.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

