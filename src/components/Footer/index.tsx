import { Box, Text, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { SiGithub, SiLinkedin } from 'react-icons/all';
import { Container } from '../../components';

const Footer = () => {
  return (
    <Box bg="#0C0D10" w="100%" mt="10rem" pt="5rem" pb="3rem">
      <Container>
        <Box mb="1rem">
          <Text color="#DECCCC" fontSize="32px" lineHeight="150%">
            afonja.adenikeo@gmail.com
          </Text>
        </Box>
        <Flex justify="space-between" align="center">
          <Box w="40%">
            <Text color="#FFFFFF" fontWeight="thin" lineHeight="150%">
              Got a project in mind? Or a design speaking opportunity? Shoot me
              a mail. Chances are, I’ll reply and will be happy to have a chat.
              ✌️
            </Text>
          </Box>
          <Box>
            <Icon as={SiGithub} color="white" fontSize="32px" mr="1rem" />
            <Icon as={SiLinkedin} color="white" fontSize="32px" />
          </Box>
        </Flex>
        <Flex mt="5rem" fontWeight="thin">
          <Text color="#FFFFFF;">Designed with ❤️ by me</Text>
        </Flex>
      </Container>
    </Box>
  );
 }

export default Footer;
