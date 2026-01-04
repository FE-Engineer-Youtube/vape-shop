import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Anchor,
  Box,
  Image,
} from "@mantine/core";
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
        "Anything and everything for your Smoke and Vape needs at the LOWEST prices! 7 Amazing Locations in South Florida!",
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
    <>
      <Container size="lg" py="xl">
        <Stack gap="xl" align="center">
          <Stack gap="md" align="center">
            <Title order={1} ta="center" c="teal.5">
              The Plug
            </Title>
            <Title order={2} ta="center" c="pink">
              Smoke & Vape Shop
            </Title>
          </Stack>

          <Text size="lg" ta="center" fw={500} c="blue.5" mt="md">
            Anything and everything for your Smoke and Vape needs at the LOWEST
            prices!
          </Text>
        </Stack>
      </Container>

      <Box
        w="100%"
        h="5rem"
        bg="teal.8"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            padding: "6px 72px",
            backgroundColor: "white",
            borderRadius: "var(--mantine-radius-md)",
          }}
        >
          <Text size="lg" ta="center" fw={600}>
            <Anchor
              component={Link}
              to="/contact"
              size="lg"
              c="teal"
              td="underline"
            >
              7 Amazing Locations in South Florida!
            </Anchor>
          </Text>
        </Box>
      </Box>

      <Container size="lg" py="xl">
        <Box mt="xl" h="400px">
          <Image
            h="400px"
            radius="md"
            fit="cover"
            src="/images/Pompano_Store.png"
            alt="Pompano Store"
            style={{
              objectPosition: "center calc(50% - 70px)",
            }}
          />
        </Box>
      </Container>

      <Container size="lg" py="xl">
        <Text size="lg" ta="center" fw={500} c="pink">
          We have a diverse selection of CBD, Delta 8, Glass, Grinders, Hookah,
          Rolling Trays, Vapes, and so much more
        </Text>
      </Container>

      <Box w="100%" py="xl" bg="teal.8">
        <Container size="lg">
          <Stack gap="xl" align="center">
            <Stack gap="xl" style={{ maxWidth: "800px" }} align="center">
              <Title order={2} ta="center" style={{ color: "white" }}>
                We strive to provide the most{" "}
                <span style={{ color: "#00ffff" }}>cutting edge products</span>{" "}
                on the market!
              </Title>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container size="lg" py="xl">
        <Stack gap="xl" align="center">
          <Group gap="xs" justify="center">
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
            <Text size="2rem">🔌</Text>
          </Group>

          <Text size="lg" ta="center" fw={600}>
            7 Plugs to choose from!
          </Text>
        </Stack>
      </Container>

      <Box w="100%" h="3rem" bg="teal.8" />

      <Container size="lg" py="xl">
        <Stack gap="xl" align="center">
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
    </>
  );
}
