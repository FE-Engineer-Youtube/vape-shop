import type { Route } from "./+types/privacy";
import {
  Container,
  Title,
  Text,
  Stack,
  Paper,
  Anchor,
  List,
} from "@mantine/core";
import { checkAgeVerification } from "~/lib/age-verification";

export function clientLoader() {
  return checkAgeVerification();
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - The Plug Smoke & Vape" },
    {
      name: "description",
      content:
        "Privacy Policy for SMS Marketing & Communications - The Plug Smoke & Vape",
    },
  ];
}

export default function Privacy() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" align="center">
          <Title order={1} ta="center">
            Privacy Policy
          </Title>
          <Text size="sm" c="dimmed">
            Last Updated: [12/10/2025]
          </Text>
        </Stack>

        <Paper p="xl" withBorder>
          <Stack gap="lg">
            <Text>
              The Plug Smoke & Vape ("we," "our," or "us") is committed to
              protecting the privacy of our customers and ensuring full
              compliance with all wireless carrier requirements, including
              S.H.A.F.T. rules and CTIA messaging guidelines. This Privacy
              Policy explains how we collect, use, and protect information when
              you engage with our website, in-store services, or SMS marketing
              program.
            </Text>

            <Text fw={600}>
              By using our services—including opting into SMS messages—you agree
              to this Privacy Policy.
            </Text>

            <Title order={3}>1. S.H.A.F.T. Compliance</Title>
            <Text>
              The Plug Smoke & Vape operates in a regulated industry. To comply
              with S.H.A.F.T. rules (Sex, Hate, Alcohol, Firearms,
              Tobacco/Vape), we maintain the following strict standards:
            </Text>
            <List withPadding>
              <List.Item>
                SMS messages are only sent to subscribers who have affirmatively
                opted in.
              </List.Item>
              <List.Item>
                We do not market to anyone under 21 years old.
              </List.Item>
              <List.Item>
                Age-gating measures are used for SMS opt-in, websites, and
                in-store sign-ups.
              </List.Item>
              <List.Item>
                We do not send or permit content that carriers classify as
                disallowed (e.g., explicit content, hate content, firearm
                promotions).
              </List.Item>
              <List.Item>
                SMS messaging related to tobacco and vape products complies with
                CTIA's restricted-content requirements.
              </List.Item>
              <List.Item>
                Your mobile number, personal information, and age-verification
                data will only be used to confirm legal eligibility and to
                deliver compliant messaging.
              </List.Item>
            </List>

            <Title order={3}>2. Information We Collect</Title>
            <Text>
              We may collect the following information when you interact with
              us:
            </Text>

            <Title order={4}>Personal Information</Title>
            <List withPadding>
              <List.Item>Name</List.Item>
              <List.Item>Phone number</List.Item>
              <List.Item>Email address</List.Item>
              <List.Item>Date of birth or age verification</List.Item>
              <List.Item>
                Information voluntarily provided when communicating with us
              </List.Item>
            </List>

            <Title order={4}>Device & Usage Information</Title>
            <List withPadding>
              <List.Item>IP address</List.Item>
              <List.Item>Browser type</List.Item>
              <List.Item>Device identifiers</List.Item>
              <List.Item>Pages viewed and link interactions</List.Item>
              <List.Item>SMS message interaction data</List.Item>
            </List>

            <Text>
              We collect only what is necessary for legal compliance, SMS
              delivery, customer service, and business operations.
            </Text>

            <Title order={3}>3. How We Use Your Information</Title>
            <Text>We use your information for:</Text>
            <List withPadding>
              <List.Item>Order fulfillment and customer support</List.Item>
              <List.Item>Age verification and S.H.A.F.T. compliance</List.Item>
              <List.Item>Sending requested SMS marketing messages</List.Item>
              <List.Item>
                Sending account or transaction-related alerts
              </List.Item>
              <List.Item>
                Providing promotions, discounts, new product updates, and
                loyalty notifications (only to age-verified, opted-in
                subscribers)
              </List.Item>
              <List.Item>
                Compliance with federal, state, and wireless carrier regulations
              </List.Item>
              <List.Item>Website improvement and security</List.Item>
            </List>

            <Title order={3}>4. SMS Marketing Program & Privacy</Title>
            <Text>Your SMS privacy is extremely important to us.</Text>

            <Title order={4}>Required CTIA/Carrier SMS Carve-Out</Title>
            <Paper p="md" withBorder bg="gray.0">
              <Text fw={600} style={{ fontStyle: "italic" }}>
                "No mobile information will be shared with third
                parties/affiliates for marketing/promotional/advertising
                purposes. All the above categories exclude text messaging
                originator opt-in data and consent; this information will not be
                shared with any third parties."
              </Text>
            </Paper>

            <Title order={4}>Use of SMS Information</Title>
            <Text>If you opt in to our SMS program, we may send:</Text>
            <List withPadding>
              <List.Item>Sale alerts</List.Item>
              <List.Item>Discounts & promotions</List.Item>
              <List.Item>
                Vape/tobacco-related product updates (21+ only)
              </List.Item>
              <List.Item>
                Store news, events, and loyalty program information
              </List.Item>
              <List.Item>Order updates or service notifications</List.Item>
            </List>

            <Text>
              You can opt out anytime by replying STOP.
              <br />
              Reply HELP for assistance.
            </Text>

            <Text>
              We do not purchase phone numbers or SMS lists.
              <br />
              We do not send messages without explicit, documented opt-in.
            </Text>

            <Title order={3}>5. How We Share Your Information</Title>
            <Text>
              We only share personal information in the following limited
              circumstances:
            </Text>

            <Title order={4}>A. Service Providers</Title>
            <Text>
              With trusted vendors who assist with order processing, SMS message
              delivery, website hosting, or payment processing. These providers
              are prohibited from using your information for their own
              marketing.
            </Text>

            <Title order={4}>B. Legal Compliance</Title>
            <Text>
              To comply with law enforcement, regulatory agencies, or legal
              obligations.
            </Text>

            <Title order={4}>C. Business Transfers</Title>
            <Text>If we undergo a merger, acquisition, or restructuring.</Text>

            <Title order={4}>D. SMS Opt-In Data Restrictions</Title>
            <Text>
              We never sell, trade, share, or disclose SMS consent data or
              mobile numbers to any third party for marketing or promotional
              purposes.
            </Text>

            <Title order={3}>6. Data Security</Title>
            <Text>
              We use reasonable administrative, technical, and physical
              safeguards to protect your information against loss, misuse, or
              unauthorized access.
            </Text>
            <Text>
              However, no method of transmission is 100% secure and we cannot
              guarantee absolute security.
            </Text>

            <Title order={3}>7. Data Retention</Title>
            <Text>
              We retain personal information only as long as necessary to:
            </Text>
            <List withPadding>
              <List.Item>Fulfill the purposes stated in this Policy</List.Item>
              <List.Item>
                Maintain required legal or regulatory records
              </List.Item>
              <List.Item>
                Comply with S.H.A.F.T. age-verification requirements
              </List.Item>
            </List>
            <Text>
              You may request deletion of your personal data at any time
              (subject to legal retention obligations).
            </Text>

            <Title order={3}>8. Your Choices & Rights</Title>

            <Title order={4}>Opt Out of SMS Messages</Title>
            <List withPadding>
              <List.Item>Reply STOP to unsubscribe.</List.Item>
              <List.Item>Reply HELP for support.</List.Item>
              <List.Item>
                You may also request removal by contacting us.
              </List.Item>
            </List>

            <Title order={4}>Access and Correction</Title>
            <Text>
              You may request access, correction, or deletion of your personal
              data.
            </Text>
            <Text>We will honor these requests unless prohibited by law.</Text>

            <Title order={3}>9. Age Restrictions</Title>
            <Text>
              The Plug Smoke & Vape strictly serves individuals 21 years of age
              or older.
            </Text>
            <Text>
              We do not knowingly collect or store information from anyone under
              21.
            </Text>
            <Text>
              If we discover that data from an underage individual has been
              collected, we will delete it immediately.
            </Text>

            <Title order={3}>10. Changes to This Privacy Policy</Title>
            <Text>We may update this Policy from time to time.</Text>
            <Text>When updated, the "Last Updated" date will be revised.</Text>
            <Text>
              Continued use of our services constitutes acceptance of the
              updated Policy.
            </Text>

            <Title order={3}>11. Contact Us</Title>
            <Text>
              For questions about this Privacy Policy, S.H.A.F.T. compliance, or
              our SMS program:
            </Text>
            <Stack gap="xs" pl="md">
              <Text fw={600}>The Plug Smoke & Vape</Text>
              <Text>
                Email:{" "}
                <Anchor href="mailto:Plugvapeshop@gmail.com">
                  Plugvapeshop@gmail.com
                </Anchor>
              </Text>
              <Text>
                Phone: <Anchor href="tel:+15617174692">(561) 717-4692</Anchor>
              </Text>
              <Text>Address: 22113 Powerline Rd, Boca Raton, FL 33433</Text>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
