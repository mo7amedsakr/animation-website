import React, { FC, useState } from 'react';
import {
  Card,
  CardLeft,
  Info,
  Title,
  Description,
  CardRight,
  CardImg,
} from './HorizontalStyles';
import { HorizontalScroll } from '../../../components/UI/HorizontalScroll';
import { theme } from '../../../styled/theme';
import P1 from '../../../assets/eleanor.jpg';
import P2 from '../../../assets/finalcard.jpg';
import P3 from '../../../assets/olumo.jpg';
import P4 from '../../../assets/sandbox.jpg';

export interface HorizontalProps {}

export const Horizontal: FC<HorizontalProps> = (props) => {
  const items = useState([P1, P2, P3, P4])[0];
  return (
    <HorizontalScroll style={{ backgroundColor: theme.colors.bg }}>
      {items.map((p, i) => (
        <Card key={i}>
          <CardLeft>
            <Info>0{i + 1} &emsp; &emsp; Lorem.</Info>
            <Title>Lorem, ipsum dolor.</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, magnam adipisci porro similique optio voluptatem
              veritatis, nihil inventore architecto provident quis et fuga
              consectetur molestias ipsam voluptates hic vitae nesciunt.
            </Description>
          </CardLeft>
          <CardRight>
            <CardImg src={p} />
          </CardRight>
        </Card>
      ))}
    </HorizontalScroll>
  );
};
