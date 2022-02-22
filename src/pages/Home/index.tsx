import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Container } from '../../components';
import Lugah from '../../assets/img/Lugah.svg';
import AgentBook from '../../assets/img/AgentBook-W.svg';
import Esquity from '../../assets/img/Esquity.svg';
import Grocerist from '../../assets/img/Grocerist.svg';
import Mobile from '../../assets/img/Mobile-AB.svg';
import XCEL from '../../assets/img/XCEL.svg';


const Home = () => {
  
  return (
    <Container>
      <Box w="100%">
        <Box w="60%" mt="5rem">
          <Text
            fontSize="lg"
            fontWeight="bold"
            lineHeight="36px"
            letterSpacing="3%">
            Hello, I'm Deni 👋
          </Text>
          <Text
            fontSize="lg"
            fontWeight="thin"
            lineHeight="36px"
            letterSpacing="3%">
            Product Designer & UI Developer
          </Text>
          <Text
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="3%"
            lineHeight="36px">
            I love the thrill of solving problems through design with a focus on
            people, data, business and technology.
          </Text>
        </Box>
        <Box mt="5rem">
          <Flex gap={10} justify="space-between" mb="3rem">
            <Box w="100%">
              <Link to="/lugah">
                <Image src={Lugah} alt="Lugah" w="100%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link to="/agent-book">
                <Image src={AgentBook} alt="AgentBook" w="100%" />
              </Link>
            </Box>
          </Flex>
          <Flex gap={10} justify="space-between" mb="3rem">
            <Box w="100%">
              <Link to="/mobile-ab">
                <Image src={Mobile} alt="Mobile" w="100%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link to="/esquity">
                <Image src={Esquity} alt="Esquity" w="100%" />
              </Link>
            </Box>
          </Flex>
          <Flex gap={10} justify="space-between">
            <Box w="100%">
              <Link to="/xcel">
                <Image src={XCEL} alt="XCEL" w="100%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link to="/grocerist">
                <Image src={Grocerist} alt="Grocerist" w="100%" />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
