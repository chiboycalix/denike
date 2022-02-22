/** @format */

import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import MinimumViableProductImg from '../../../assets/img/minimumViableProduct.svg';
import { Container } from '../../../components';

const MinimumViableProduct = () => {
  return (
    <Box py="3rem" bg="#f0f0f0" color="black">
      <Container>
        <Text fontSize="32px" fontWeight="bold">
          Minimum Viable Product
        </Text>
        <Text>
          After the product planning and votes on the proposed features, due to
          the limited time we had before presentation of our first demo at the
          GITEX2021, we decided to come up with an MVP matrix. This was to help
          with feature prioritisation and to provide a basic version of the
          mobile application.
        </Text>
        <Flex mt="3rem" justifyContent="center" alignItems="center">
          <Image src={MinimumViableProductImg} alt="Minimum Viable Product" />
        </Flex>
      </Container>
    </Box>
  );
};
export default MinimumViableProduct;
