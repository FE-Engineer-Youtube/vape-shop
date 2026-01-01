import type { Route } from "./+types/terms";
import { Container, Title, Text, Stack, Paper, Anchor } from "@mantine/core";
import { checkAgeVerification } from "~/lib/age-verification";

export function clientLoader() {
  return checkAgeVerification();
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms & Conditions - The Plug Vape & Smoke Shop" },
    {
      name: "description",
      content:
        "SMS Messaging Program Terms & Conditions for The Plug Vape & Smoke Shop",
    },
  ];
}

export default function Terms() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center">
          Terms & Conditions
        </Title>

        <Paper p="xl" withBorder>
          <Stack gap="lg">
            <Title order={2} ta="center" c="pink">
              SMS messaging program
            </Title>
            <Text>
              These SMS Messaging Program Terms & Conditions ("Terms") govern
              your participation in the text messaging program ("Program")
              offered by The Plug Vape & Smoke Shop ("Company," "we," "us," or
              "our"). By enrolling in, utilizing, or otherwise participating in
              the Program, you acknowledge and agree to be bound by these Terms.
            </Text>

            <Title order={3}>1. Program Description</Title>
            <Text>
              The Program enables users who have provided prior express written
              consent to receive recurring text messages from The Plug Vape &
              Smoke Shop. Such messages may include, without limitation:
              promotional offers, discount notifications, product launch
              announcements, inventory or restock updates, event notices, and
              informational or transactional alerts related to purchases or
              customer accounts. Message frequency may vary at the Company's
              sole discretion.
            </Text>

            <Title order={3}>2. Eligibility; S.H.A.F.T. Compliance</Title>
            <Text>
              Due to the nature of the products marketed—namely tobacco, vapor,
              and related accessories—the Program is restricted pursuant to
              S.H.A.F.T. regulations.
            </Text>
            <Text>
              Only individuals who are at least twenty-one (21) years of age and
              legally permitted to purchase such products in their jurisdiction
              may enroll.
            </Text>
            <Text>
              The Company does not knowingly solicit, collect, or send messages
              to individuals under the age of 21.
            </Text>

            <Title order={3}>3. Opt-Out Procedure</Title>
            <Text>
              You may revoke your consent and opt out of the Program at any time
              by replying "STOP" to any message received from the Company. Upon
              receipt of a valid STOP request, the Company will send a final
              confirmation message indicating that you have been unsubscribed.
              No further messages will be transmitted thereafter, unless you
              subsequently opt back in as described below.
            </Text>

            <Title order={3}>4. Opt-In/Resubscription Procedure</Title>
            <Text>
              If you have previously opted out and wish to re-enroll in the
              Program, you may do so by sending "START" or "UNSTOP" to the same
              number from which you unsubscribed. By resubscribing, you reaffirm
              your agreement to these Terms.
            </Text>

            <Title order={3}>5. Help and Support</Title>
            <Text>
              To request assistance, reply "HELP" to any Program message. You
              may also contact the Company directly via:
            </Text>
            <Stack gap="xs" pl="md">
              <Text>
                Email:{" "}
                <Anchor href="mailto:support@theplugvape.com">
                  support@theplugvape.com
                </Anchor>
              </Text>
              <Text>
                Phone: <Anchor href="tel:+15559876543">(555) 987-6543</Anchor>
              </Text>
            </Stack>

            <Title order={3}>6. Carrier Liability Disclaimer</Title>
            <Text>
              You acknowledge and agree that mobile telephone carriers and
              service providers bear no responsibility or liability for delayed,
              failed, or undelivered text messages associated with the Program.
              Message delivery is not guaranteed.
            </Text>

            <Title order={3}>7. Message and Data Rates</Title>
            <Text>
              Standard message and data rates may apply to all SMS and MMS
              communications sent or received under the Program. Charges are
              billed by and remain the sole responsibility of your mobile
              service provider.
            </Text>

            <Title order={3}>8. Privacy Policy</Title>
            <Text>
              All personal information collected in connection with the Program
              is handled in accordance with the Company's Privacy Policy. You
              are encouraged to review the policy for details regarding data
              practices, usage, and retention.
            </Text>
            <Text>
              Privacy Policy:{" "}
              <Anchor href="/privacy" target="_blank">
                https://www.theplugvape.com/privacy
              </Anchor>
            </Text>

            <Title order={3}>9. Modifications to Terms</Title>
            <Text>
              The Company reserves the unrestricted right to amend, modify, or
              update these Terms at any time, with or without prior notice. Any
              such changes shall be effective upon posting to the Company's
              website, and your continued participation in the Program shall
              constitute acceptance of the amended Terms.
            </Text>

            <Title order={3}>10. Governing Law</Title>
            <Text>
              These Terms shall be governed by and construed in accordance with
              the laws of the state in which The Plug Vape & Smoke Shop
              operates, without regard to conflict-of-law principles.
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
