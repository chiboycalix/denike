/** @format */

import { Box, Flex, Text } from '@chakra-ui/react';
import { Container } from '../../components';

interface IProps {
  backgroundDescription: string[];
  projectDuration: string;
  teamDescription: string;
  designRequirement?: boolean;
}

const Background = ({
  backgroundDescription,
  projectDuration,
  teamDescription,
  designRequirement = false,
}: IProps) => {
  return (
    <Box pt="5rem" pb="5rem">
      <Container>
        <Flex justify="space-between" align="flex-start" gap="5rem">
          <Box w={'40%'}>
            <Text color="#FB8500" fontSize="12px">
              THE WHY
            </Text>
            <Text mb="1rem" fontWeight="bold" fontSize="18px">
              Background
            </Text>
            {backgroundDescription.map((bgDescription) => {
              return (
                <Text mb="1rem" lineHeight="27px">
                  {bgDescription}
                </Text>
              );
            })}
            {designRequirement && (
              <Box>
                <Text fontWeight="bold" mb=".5rem">
                  Design requirements
                </Text>
                <Text>
                  Bulk Payment, Approval System, Business Product Creation and
                  POS Payment Services.
                </Text>
              </Box>
            )}
          </Box>
          <Box w={'40%'}>
            <Text color="#FB8500" fontSize="12px">
              ROLE & DURATION
            </Text>
            <Text mb="1rem" fontWeight="bold" fontSize="18px">
              Role
            </Text>
            <Box mb="1rem">
              <Text fontSize="16px" fontWeight="bold">
                Sole Product Designer
              </Text>
              <Text lineHeight="27px">
                I was responsible for: Product direction, User Research, User
                interface design, Prototyping, and Testing.
              </Text>
            </Box>
            <Box mb="1rem">
              <Text fontSize="16px" fontWeight="bold">
                Team
              </Text>
              <Text lineHeight="27px">{teamDescription}</Text>
            </Box>
            <Box>
              <Text fontSize="16px" fontWeight="bold">
                Duration
              </Text>
              <Text>{projectDuration}</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Background;
