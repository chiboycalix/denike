/** @format */

import { Box, Text, Container, UnorderedList, ListItem } from '@chakra-ui/react';

interface Iprops {
  bgColor: string;
  goals: string[];
  title: string;
  titleColor: string;
}

const TheGoal = ({ bgColor, goals, title, titleColor }: Iprops) => {
  return (
    <Box bgColor={bgColor} py="3rem">
      <Container maxW="container.xl">
        <Text color={titleColor}>{title}</Text>
        <UnorderedList color="white">
          {goals.map((goal) => {
            return <ListItem w="70%">{goal}</ListItem>;
          })}
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default TheGoal;
