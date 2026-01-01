import type { Route } from "./+types/coa";
import {
  Container,
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  Anchor,
  Group,
} from "@mantine/core";
import { checkAgeVerification } from "~/lib/age-verification";

export function clientLoader() {
  return checkAgeVerification();
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "COA Information - The Plug Smoke & Vape Shop" },
    {
      name: "description",
      content:
        "Certificate of Analysis (COA) Information for The Plug Smoke & Vape Shop products",
    },
  ];
}

export default function COA() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center">
          COA Information
        </Title>

        <Paper p="xl" withBorder>
          <Stack gap="md">
            <Text size="lg" fw={500}>
              Certificate of Analysis (COA)
            </Text>

            <Text>
              At The Plug Smoke & Vape Shop, we are committed to providing
              high-quality products that meet safety and quality standards.
              Certificate of Analysis (COA) documents provide detailed
              information about the composition and testing of our products.
            </Text>

            <Alert color="blue" title="Product Quality Assurance">
              <Text>
                We strive to provide the most cutting-edge products on the
                market, and we ensure that our products undergo proper testing
                and quality control measures.
              </Text>
            </Alert>

            <Title order={3}>Available COA Documents</Title>
            <Stack gap="sm">
              <Group>
                <Anchor
                  href="/pdf/8_Mile_Underground_COA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  8 Mile Underground
                </Anchor>
              </Group>
              <Group>
                <Anchor
                  href="/pdf/Black_Market_Diesel_COA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Black Market Diesel
                </Anchor>
              </Group>
              <Group>
                <Anchor
                  href="/pdf/Blackberry_Gelato_COA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blackberry Gelato
                </Anchor>
              </Group>
              <Group>
                <Anchor
                  href="/pdf/Strawberry_Diesel_COA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strawberry Diesel
                </Anchor>
              </Group>
            </Stack>

            <Title order={3}>Requesting COA Documents</Title>
            <Text>
              If you would like to request a Certificate of Analysis for any of
              our products, please contact us at{" "}
              <Anchor href="mailto:plugvapeshop@gmail.com">
                plugvapeshop@gmail.com
              </Anchor>{" "}
              with the following information:
            </Text>
            <ul>
              <li>Product name</li>
              <li>Batch number (if available)</li>
              <li>Purchase location</li>
            </ul>

            <Text size="sm" c="dimmed">
              We will do our best to provide you with the requested COA
              information in a timely manner.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
