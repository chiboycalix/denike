/** @format */

import { Box, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/all';
import { Link } from 'react-router-dom';

interface IProps {
  pageName: string;
  appType: string;
  appDescription: string
}

const PageBanner = ({ pageName, appType, appDescription }: IProps) => {
  return (
    <Box mt="5rem" mb="5rem">
      <Flex justify="flex-start" align="center">
        <Text mt=".5rem">
          <Icon as={AiOutlineArrowLeft} mr="1rem" color="#717987" />
        </Text>
        <Text color="#717987" fontSize="14px">
          <Link to="/">Back to projects</Link>
        </Text>
      </Flex>
      <Flex justify="space-between" align="center" w="100%">
        <Box>
          <Box>
            <Text fontSize="80px" fontWeight="bold">
              {pageName}
            </Text>
            <Text color="#717987">{appType}</Text>
          </Box>
        </Box>
        <Box w="50%">
          <Text>{appDescription}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default PageBanner;
