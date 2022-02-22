/** @format */

import {
  Box,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Title, Container } from '../../../components';

const Research = () => {
  return (
    <Box py="3rem">
      <Container>
        <Title title="Research and User Interviews" />
        <Text width="55%">
          Being my first time working on conversational interfaces and to set
          the product direction right, I started out with some research . My
          research was aimed at the following:
        </Text>
        <UnorderedList ml="5rem" mt="1rem">
          <ListItem mb="1rem">
            Understanding the principles and guides in designing conversationaal
            interfaces
          </ListItem>
          <ListItem mb="1rem">
            Knowing our target customers, their concerns and familiar interface
            patterns they are used to as seen on other sites with intelligent
            virtual assistants.
          </ListItem>
          <ListItem>
            Frequent tasks performed by users of banking mobile services.{' '}
          </ListItem>
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default Research;
