/** @format */

import { Box, Container } from '@chakra-ui/react';
import { PageBanner, BannerImage, Background } from '../../components';
import XcelBgImg from '../../assets/img/xcelBgImg.svg';

const XCEL = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <PageBanner
          pageName="XCEL Business"
          appType="iOS & Android Application"
          appDescription="An enterprise payment application for bulk payment processing and POS payments."
        />
      </Container>
      <BannerImage bgColor="#EBF1FE" bgImgSrc={XcelBgImg} />
      <Background
        backgroundDescription={[
          'XCEL Business is one of the products of XCEL - a financial technology company focused on facilitating payment transfers locally and internationally.',
          'After launching XCel, the founder saw potential in extending the use case of XCel app by businesses due to the volumes of transaction processed within the mobile application and service portal.',
          '',
        ]}
        teamDescription="1 Product Manager, 2 Mobile Developers, 1 UI/UX Designer"
        projectDuration="May 2021 - August 2021"
        designRequirement={true}
      />
    </Box>
  );
};

export default XCEL;
