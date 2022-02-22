/** @format */

import { Box } from '@chakra-ui/react';
import {
  PageBanner,
  BannerImage,
  Background,
  TheGoal,
  UsersInterview,
  Container,
} from '../../components';
import Research from './Research';
import Insights from './Insights';
import MinimumViableProduct from './MinimumViableProduct';
import StructuringUserFlow from './StructuringUserFlow';
import ProductPlanning from './ProductPlanning';
import LugahBgImg from '../../assets/img/lugahBgImg.svg';

const Lugah = () => {
  return (
    <Box>
      <Container>
        <PageBanner
          pageName="Lugah"
          appType="Mobile & Web App"
          appDescription="Conversational AI-based chatbot solution for the 
        banking sector to help improve customer support, automate processes 
        and provide better personal banking experiences to customers."
        />
      </Container>
      <BannerImage bgColor="#FEE7CC" bgImgSrc={LugahBgImg} />
      <Background
        backgroundDescription={[
          'Bank call centers receive a large daily influx of inquiry calls, queries, transaction requests etc. with a thousand  more customers waiting in line to get a turn to speak to a human agent without knowing when they’ll be next.',
          'On the other hand, banking apps are often overly complex because banks think the more features we have on the interface, the better. Without considering the personalized experience customers truly desire.',
          'What if a bulk of this grunt work can be apportioned to chatbots?',
        ]}
        projectDuration="5weeks: September - October ‘21"
        teamDescription="1 Project Manager, 1 Data Scientist Scrum masters, 3 Software Engineers, 1 UI/UX Designer, 1 DevOp."
      />
      <TheGoal
        bgColor="#5E3200"
        goals={[
          'Reduce bank costs:  allowing chatbot handle basic questions and issues and option to connect to bank agents in cases that require human intervention. Thereby relieving the pressure and inquiry volume for call centers.',
          'Deliver personalized and engaging mobile banking experience to users by allowing them perform their financial tasks in a conversational manner.',
        ]}
        titleColor="#FB8500"
        title="The Goal"
      />
      <Research />
      <UsersInterview
        bgColor="#FFF3E6"
        insights="I started seeking out answers to questions related to customer use of mobile banking services by interviewing 3 users that were available at the time"
      />
      <Insights />
      <ProductPlanning />
      <MinimumViableProduct />
      <StructuringUserFlow />
    </Box>
  );
};
export default Lugah;
