/** @format */

import { Box } from '@chakra-ui/react';
import {
  PageBanner,
  BannerImage,
  Background,
  Container,
} from '../../components';
import AgentBookBgImg from '../../assets/img/agentbookbgImg.svg';

const AgentBook = () => {
  return (
    <Box>
      <Container >
        <PageBanner
          pageName="AgentBook"
          appType="Mobile & Web App"
          appDescription="A web platform serving as a search tool that 
        connects home buyers and home sellers with local real-estate agents 
        and helps real-estate agent stay in communication with potential clients."
        />
      </Container>
      <BannerImage bgColor="#E4E7F1" bgImgSrc={AgentBookBgImg} />
      <Background
        backgroundDescription={[
          'Web4Realty is a leading real-estate company providing real-estate agents with tools for customer relationship management and lead generation',
          'With W4R’s current agent base, they noticed a communication gap between real estate agents, home buyers and home sellers.',
          'What if they could bridge this gap for their current agents and new ones?',
        ]}
        projectDuration="Ongoing"
        teamDescription="1 Projduct Manager, 1 UI Developer,  1 UI/UX Designer."
      />
    </Box>
  );
};
export default AgentBook;
