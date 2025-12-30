import type { Route } from "./+types/coa";
import { Container, Title, Text, Stack, Paper, Alert } from "@mantine/core";

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
    <Container size="md" py="xl">
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

            <Title order={3}>Requesting COA Documents</Title>
            <Text>
              If you would like to request a Certificate of Analysis for any of
              our products, please contact us at{" "}
              <a href="mailto:plugvapeshop@gmail.com">plugvapeshop@gmail.com</a>{" "}
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
