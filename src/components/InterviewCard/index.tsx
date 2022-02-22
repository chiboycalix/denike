import { Interview } from '../../interfaces';
import { Image } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Container } from '../../components';

interface IProps {
  interview: Interview;
}
const InterviewCard = ({ interview }: IProps) => {
  return (
    <Box
      boxShadow="7px 7px 0px #000000"
      bg="#FFFFFF"
      borderRadius="20px"
      mb="2rem"
      py="2rem"
      px="5rem">
      <Container>
        <Flex d-flex justifyContent="space-between">
          <Box flexBasis="30%">
            <Image src={interview.img} />
            <Text fontWeight="bold" mt=".5rem" color="#181717">
              {interview.fullName}
            </Text>
          </Box>
          <Box flex="1">
            <Flex mb="1rem" justifyContent="space-between">
              <Text fontSize="12px" color="#181717">
                <span style={{ fontWeight: 'bold' }}>Age:</span> {interview.age}
              </Text>
              <Text fontSize="12px" color="#181717">
                <span style={{ fontWeight: 'bold' }}>Occupation:</span>{' '}
                {interview.occupation}
              </Text>
              <Text fontSize="12px" color="#181717">
                <span style={{ fontWeight: 'bold' }}>Technical Ability:</span>{' '}
                {interview.technicalAbility}
              </Text>
            </Flex>
            <Text color="#181717">{interview.description}</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default InterviewCard;
