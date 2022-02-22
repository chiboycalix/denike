/** @format */

import { Box } from '@chakra-ui/react';
import {
  PageBanner,
  BannerImage,
  Background,
  Container,
} from '../../components';
import EsquityBgImg from '../../assets/img/esquityBgImg.svg';

const Esquity = () => {
  return (
    <Box>
      <Container>
        <PageBanner
          pageName="Esquity"
          appType="Web Application"
          appDescription="A web platform bridging the financial 
        gap between entrepreneurs and private investors. Esquity 
        provides a platfrom for entrpreneurs to raise funds and private investors to invest."
        />
      </Container>
      <BannerImage bgColor="#F7E9E5" bgImgSrc={EsquityBgImg} />
      <Background
        backgroundDescription={[
          'SMEs and Entrepreneurs often get stuck at the fund raising stage of their start-ups. This can be a long process and often times overbearing. Esquity aims to bridgeg this gap between African Start-ups and A Cocktail  of global investors by providing a platform where both can mutually benefit. ',
          'By providing entrepreneurs and SMEs in Africa an access to global investors who can contribute towards their fund raising goal.',
        ]}
        projectDuration="November 2020 - October 2021"
        teamDescription="1 Product Manager, 2 Front-end Developers, 1 Devops, 1 Product Owner, 1 UI/UX Designer"
      />
    </Box>
  );
};
export default Esquity;
