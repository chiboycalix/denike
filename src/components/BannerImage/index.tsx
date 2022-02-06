import { Box, Center, Image } from '@chakra-ui/react';

interface IProps {
  bgColor: string;
  bgImgSrc: string;
}
const BannerImage = ({ bgColor, bgImgSrc }: IProps) => {
  return (
    <Box bgColor={bgColor} position="relative" w="100%" left="0" pt="2rem" pb="2rem">
      <Center>
        <Image src={bgImgSrc} alt="bgImgSrc" />
      </Center>
    </Box>
  );
};

export default BannerImage;
