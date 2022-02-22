/** @format */

import { Container } from '@chakra-ui/react';

const ContainerComponent = ({ children }: { children?: React.ReactNode }) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default ContainerComponent;
