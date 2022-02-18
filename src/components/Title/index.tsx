/** @format */

import { Text } from '@chakra-ui/react';

interface IProps {
  title: string;
}
const Title = ({ title }: IProps) => {
  return (
    <Text fontFamily="Georgia" fontSize="32px">
      {title}
    </Text>
  );
};

export default Title;
