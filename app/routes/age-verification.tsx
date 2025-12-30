import type { Route } from "./+types/age-verification";
import { Container, Title, Text, Stack, Paper, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Age Verification - The Plug Smoke & Vape Shop" },
    {
      name: "description",
      content: "Age verification required to access The Plug Smoke & Vape Shop",
    },
  ];
}

export default function AgeVerification() {
  const navigate = useNavigate();

  const handleVerified = () => {
    sessionStorage.setItem("ageVerified", "true");
    navigate("/");
  };

  const handleNotVerified = () => {
    sessionStorage.setItem("ageVerified", "false");
    navigate("/under-age");
  };

  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Paper p="xl" withBorder>
          <Stack gap="xl" align="center">
            <Title order={1} ta="center">
              Age Verification
            </Title>
            <Text size="lg" ta="center">
              You must be 21 years of age or older to view this website
            </Text>
            <Stack gap="md" align="stretch" style={{ width: "100%" }}>
              <Button size="lg" onClick={handleVerified} fullWidth color="teal">
                I attest I am 21 years of age or older
              </Button>
              <Button size="lg" variant="outline" onClick={handleNotVerified} fullWidth color="red">
                I am not 21
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

