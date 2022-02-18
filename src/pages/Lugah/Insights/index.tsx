/** @format */

import { Box, Container, Text, Flex } from '@chakra-ui/react';
import { InsightsCard } from '../../../components';
import BotImg from '../../../assets/img/botImg.svg';
import TaskImg from '../../../assets/img/taskImg.svg';

const Insights = () => {
  return (
    <Box py="3rem">
      <Container maxW="container.xl">
        <Text fontSize="32px" fontWeight="bold">
          Findings and Insights
        </Text>
        <Text>
          After speaking to some users and doing my online research, and
          analyzing the gathered information from the online research and user
          interviews, to help have a linear direction, I categorized the
          insights into these 2 categories.
        </Text>

        <Flex mt="3rem" justifyContent="space-between" alignItems="flex-start" gap="5rem">
          <InsightsCard
            cardImg={BotImg}
            cardTitle="Interface Design and Bot experience"
            cardDescriptions={[
              'Personality and tone are key to conversational interfaces. There should be a human touch to the bot personality for better experience.',
              'Discoverability - the important actions and informations should be within reach of the interface and easy for users to get to.',
              'Stop gaps - control shouldn’t be taken fully away from users. They should be able to confirm everytime an action needs ti be taken and clarify their intents.',
              'Less typing, more clicking - the interface experience shouldn’t be fully text-based as this might lead to lower completion rates if users have to do mostly typing. Giving users option to select/click their answers will improve the UX.',
            ]}
          />

          <InsightsCard
            cardImg={TaskImg}
            cardTitle="User Tasks and Expectations"
            cardDescriptions={[
              'Prompt replies - users don’t want to wait several minutes just to get a reply',
              'Trust - most users are still a little skeptical about sharing personal data and documents over the chat with a bot except it;s happenign within the bank application and security in place.',
              'Easy onboarding - can’t easily open an account from the mobile baking application.',
              'Error fallback - users want to be able to know they can easily recover from an error tasks and confirm actions before proceeding.',
              'The major tasks carried out by users are: check account balance, transfer funds, view transaction history',
            ]}
          />
        </Flex>
      </Container>
    </Box>
  );
};
export default Insights;
