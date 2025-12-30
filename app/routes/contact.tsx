import type { Route } from "./+types/contact";
import {
  Container,
  Title,
  Text,
  Stack,
  Paper,
  Anchor,
  Grid,
  Group,
  Image,
} from "@mantine/core";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - The Plug Smoke & Vape Shop" },
    {
      name: "description",
      content:
        "Contact The Plug Smoke & Vape Shop. 6 Amazing Locations in South Florida!",
    },
  ];
}

export default function Contact() {
  const locations = [
    {
      address: "22113 Powerline Rd, Boca Raton, FL 33433",
      phone: "(561) 717-4692",
      phoneLink: "+15617174692",
    },
    {
      address: "23050 Sandalfoot Plaza Dr, Boca Raton, FL 33428",
      phone: "(561) 576-2294",
      phoneLink: "+15615762294",
    },
    {
      address: "4687 N. State Road 7, Coral Springs, FL 33073",
      phone: "(754) 812-1585",
      phoneLink: "+17548121585",
    },
    {
      address: "4839 Dixie Highway, Deerfield Beach, FL 33064",
      phone: "(954) 531-0362",
      phoneLink: "+19545310362",
    },
    {
      address: "7379 SW 40th St, Miami, FL 33155",
      phone: "(786) 353-2849",
      phoneLink: "+17863532849",
    },
    {
      address: "233 S Federal Hwy, Pompano Beach, FL 33062",
      phone: "(954) 876-1938",
      phoneLink: "+19548761938",
    },
  ];

  const hours = [
    { day: "Mon", hours: "9 AM - 12 AM" },
    { day: "Tues", hours: "9 AM - 12 AM" },
    { day: "Wed", hours: "9 AM - 12 AM" },
    { day: "Thu", hours: "9 AM - 1 AM" },
    { day: "Fri", hours: "9 AM - 1 AM" },
    { day: "Sat", hours: "9 AM - 1 AM" },
    { day: "Sun", hours: "9 AM - 12 AM" },
  ];

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center">
          6 Amazing Locations in South Florida!
        </Title>

        <Paper p="xl" withBorder>
          <Stack gap="xl">
            <Stack gap="md">
              <Title order={2}>Contact us</Title>
              <Text>
                <Anchor href="mailto:plugvapeshop@gmail.com">
                  plugvapeshop@gmail.com
                </Anchor>
              </Text>
            </Stack>

            <Stack gap="md">
              <Title order={3}>Locations:</Title>
              <Grid>
                {locations.map((location, index) => (
                  <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                    <Paper p="md" withBorder>
                      <Stack gap="xs">
                        <Text fw={500}>{location.address}</Text>
                        <Text>
                          <Anchor href={`tel:${location.phoneLink}`}>
                            {location.phone}
                          </Anchor>
                        </Text>
                      </Stack>
                    </Paper>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>

            <Stack gap="md">
              <Title order={3}>Hours of operation</Title>
              <Grid>
                {hours.map((schedule, index) => (
                  <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                    <Group justify="space-between">
                      <Text fw={500}>{schedule.day}</Text>
                      <Text>{schedule.hours}</Text>
                    </Group>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>

            <Stack gap="xl" mt="md">
              <Stack gap="md">
                <Image
                  src="/images/hookah-kratom.png"
                  alt="Hookah and Kratom products"
                  radius="md"
                />
                <Text size="lg" fw={500} ta="center" c="pink">
                  We carry a huge selection of Hookah and Kratom!
                </Text>
              </Stack>
              <Stack gap="md">
                <Image
                  src="/images/cbd-delta8.png"
                  alt="CBD and Delta 8 products"
                  radius="md"
                />
                <Text size="lg" fw={500} ta="center" c="teal">
                  We carry a wide variety of CBD and Delta 8 products!
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
