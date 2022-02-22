/** @format */

import { Box, Text, Image, Flex } from '@chakra-ui/react';
import userFlowOne from '../../../assets/img/userFlowOne.svg';
import userFlowTwo from '../../../assets/img/userFlowTwo.svg';
import userFlowThree from '../../../assets/img/userFlowThree.svg';
import userFlowArtistic from '../../../assets/img/userFlowArtistic.svg';
import { Container } from '../../../components';

const StructuringUserFlow = () => {
  return (
    <Box py="3rem" bg="#F7F7F6;" color="black">
      <Container>
        <Text fontSize="32px" fontWeight="bold">
          Structuring User Flow
        </Text>
        <Text>
          Once we finalized on the core features we wanted to include in the
          demo, I came up with two possible user flows depending on the “why” a
          user might use the chatbot application. This was to help us map out
          the optimal path for users to get them started off with whatever their
          need might be.
        </Text>
        <Image src={userFlowOne} alt="userFlowOne" width="100%" mt="3rem" />
        <Image src={userFlowTwo} alt="userFlowTwo" width="100%" mt="3rem" />
        <Image src={userFlowThree} alt="userFlowThree" width="100%" mt="3rem" />
        <Flex justifyContent="center" alignItems="center">
          <Image
            src={userFlowArtistic}
            alt="userFlowArtistic"
            width="100%"
            mt="3rem"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default StructuringUserFlow;
