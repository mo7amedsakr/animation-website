import React, { FC, useEffect, useRef } from 'react';
import { Container, TextContainer, Text } from './WordStyles';
// import MainImg from '../../../assets/3peeps.jpg';

export interface WordProps {}

export const Word: FC<WordProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef}>
      <TextContainer>{/* <Text>ZEBY</Text> */}ZEBY</TextContainer>
    </Container>
  );
};
