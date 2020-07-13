import React, { FC } from 'react';
import { Card as CardContainer } from './DragStyles';

export interface CardProps {
  enter: () => void;
  leave: () => void;
  source: any;
  text: string;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <CardContainer onMouseEnter={props.enter} onMouseLeave={props.leave}>
      <div style={{ overflow: 'hidden' }}>
        <img src={props.source} alt="" draggable={false} />
      </div>
      <p>{props.text}</p>
    </CardContainer>
  );
};
