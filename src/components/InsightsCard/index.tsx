/** @format */

import { Box, Flex, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

interface IProps {
  cardImg: string;
  cardTitle: string;
  cardDescriptions: string[];
}

const InsightsCard = ({ cardImg, cardTitle, cardDescriptions }: IProps) => {
  return (
    <Box border="1px solid #E9CFB1" borderRadius="8px" p="2rem" flexBasis="50%">
      <Flex flexDir="column">
        <Image src={cardImg} mb="1rem" width="2.5rem" height="2.5rem"/>
        <Text mb="1rem" color="#FB8500" fontSize="18px" fontWeight="400">
          {cardTitle}
        </Text>
        <UnorderedList>
          {cardDescriptions.map((cardDescription) => {
            return (
              <ListItem mb="1rem">
                {cardDescription}
              </ListItem>
            );
          })}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default InsightsCard;
