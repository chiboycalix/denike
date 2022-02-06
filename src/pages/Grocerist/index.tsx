/** @format */

import { Box, Container } from '@chakra-ui/react';
import { PageBanner, BannerImage, Background } from '../../components';
import GroceristBgImg from '../../assets/img/groceristBgImg.svg';
const Grocerist = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <PageBanner
          pageName="Grocerist"
          appType="iOS Application"
          appDescription="A grocery shopping list management application for easy planning and budgeting of grocery shopping. "
        />
      </Container>
      <BannerImage bgColor="#F6D7BB" bgImgSrc={GroceristBgImg} />
      <Background
        backgroundDescription={[
          'Grocery shopping can be fun yet so tasking and sometimes, a hassle; with the numerous items people have to pick up from the grocer and a possibility of one forgetting to pick up some. Thereby making multiple trips back to the grocer.',
          'How then can people adequately and effectively plan this part of the lives by being able to keep track of items needed for their grocery shopping.t',
        ]}
        teamDescription="Personal Project."
        projectDuration="2weeks."
      />
    </Box>
  );
};

export default Grocerist;
