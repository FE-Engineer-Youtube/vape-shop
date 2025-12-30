import type { Route } from "./+types/home";
import { Container, Title, Text, Stack, Group, Box } from "@mantine/core";
import { checkAgeVerification } from "~/lib/age-verification";
import { useEffect } from "react";

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
  useEffect(() => {
    // Load the review widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://reputationhub.site/reputation/assets/review-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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

        <Box mt="xl" style={{ width: "100%" }}>
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/6oDyE9n7ZU8x76huyzCv?widgetId=68dd825004a8290b60d210c0"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Google Reviews"
          />
        </Box>
      </Stack>
    </Container>
  );
}
