/** @format */

import { Box, Container } from '@chakra-ui/react';
import { PageBanner, BannerImage, Background } from '../../components';
import MobileAbBgImg from '../../assets/img/mobileAbBgImg.svg';

const MobileAB = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <PageBanner
          pageName="MobileAB"
          appType="iOS Application"
          appDescription="Designing a mobile adaptation of the 
        web4realty web admin portal to improve real 
        estate agent workflow and allow them easily follow up with leads on the go. "
        />
      </Container>
      <BannerImage bgColor="#E2EEF6" bgImgSrc={MobileAbBgImg} />
      <Background
        backgroundDescription={[
          'In providing a tool to help real estate agents better manage leads and their workflow, Web4Realty’s founding team had piloted their services using a web application portal.',
          'After a successful launch and traction, they saw potential in building a mobile app version which will allow agents manage conversations with potential leads on-the-go and also stay up to date with important events in their calendars.',
        ]}
        projectDuration="July 2021 - September 2021"
        teamDescription="1 Projduct Manager, 1 UI Developer,  1 UI/UX Designer."
      />
    </Box>
  );
};

export default MobileAB;
