import {
  Box,
  Container,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { InterviewCard } from '../../components';
import { interviews } from '../../utils/interviews';
import { Interview } from '../../interfaces';
interface IProps {
  bgColor: string;
  insights: string;
}
const UsersInterview = ({ bgColor, insights }: IProps) => {
  const { lugahInterviews } = interviews;
  return (
    <Box bgColor={bgColor} py="3rem">
      <Container maxW="container.xl">
        <Box mb="3rem">
          <Text color="#FB8500" textTransform="uppercase" fontSize="14px">
            Personas
          </Text>
          <Text
            color="#181717"
            textTransform="capitalize"
            fontSize="32px"
            fontWeight="bold">
            User Interviews
          </Text>
          <Text color="#181717" fontSize="18px" width="72%">
            {insights}
          </Text>
        </Box>
        {lugahInterviews.map((lugahInterview: Interview) => {
          return (
            <React.Fragment key={lugahInterview.id}>
              <InterviewCard interview={lugahInterview}/>
            </React.Fragment>
          );
        })}
      </Container>
    </Box>
  );
};

export default UsersInterview
