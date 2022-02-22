/** @format */

import { Box, Text, Image } from '@chakra-ui/react';
import ProductPlanningImg from '../../../assets/img/productPlanning.svg'
import { Container } from '../../../components';

const ProductPlanning = () => {
  return (
    <Box py="3rem" bg="#F7F7F6;" color="black">
      <Container>
        <Text fontSize="32px" fontWeight="bold">
          Product Planning
        </Text>
        <Text>
          After analyzing the information gathered from my research and with a
          clear understanding of the problem we were trying to solve for, I came
          up with a whiteboard shared with the team and stakeholders. This
          whiteboard was to help set the product direction, come up with the
          userflow and enable us have a linear direction as we work on our
          MVP(minimum viable product).
        </Text>
        <Box bg="white" my={5} w="100%">
          <Image src={ProductPlanningImg} alt="ProductPlanningImg" />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPlanning;
