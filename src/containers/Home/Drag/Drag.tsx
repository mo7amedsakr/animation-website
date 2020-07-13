import React, { FC, useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Container, CardsContainer } from './DragStyles';
import { useMouse, useMedia } from 'react-use';
import { useSpring } from 'react-spring';
import { Slider } from '../../../components/UI/Slider';
import { Cursor } from '../../../components/Cursor/Cursor';
import { Card } from './Card';
import VisibilitySensor from 'react-visibility-sensor';

import P1 from '../../../assets/6c22fbfa8691b5ade6e66dd266eb9eaae45f6ab6_news_kanarys.jpg';
import P2 from '../../../assets/6dfb216a-36ed-4390-983d-6e7a71d5ab88_team2.jpg';
import P3 from '../../../assets/c2615524-dc22-40ba-9205-480ee77a7719_riv_fri.jpg';
import P4 from '../../../assets/c92b4bc461360269f2622e90187727de1038f80d_disrupt-2.jpg';
import P5 from '../../../assets/efab74b87a4f39c90b176d4be6b9d51c31288f92_rihanna-rj-rivian.jpeg';

export interface DragProps {}

export const Drag: FC<DragProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const items = useState([P1, P2, P3, P4, P5])[0];
  const [cardHover, setCardHover] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const conatainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const { elX, elY } = useMouse(cardsContainerRef);

  const isDesktop = useMedia('(min-width: 992px)');

  useLayoutEffect(() => {
    if (elX > 0 && elY > 0 && isDesktop) {
      cursorRef.current!.style.left = `${
        elX - cursorRef.current!.offsetWidth / 2
      }px`;
      cursorRef.current!.style.top = `${
        elY - cursorRef.current!.offsetHeight * 1.5
      }px`;
    }
  }, [elX, elY, isDesktop]);

  const enterHandler = () => setCardHover(true);
  const leaveHandler = () => setCardHover(false);

  const [cardsAnimation, setCardsAnimation] = useSpring(() => ({
    config: {
      precision: 0,
      duration: 400,
    },
    opacity: 1,
    transform: 'translate(0%,0%)',
    from: { opacity: 0, transform: 'translate(100%,100%)' },
  }));

  useEffect(() => {
    if (isVisible) {
      setCardsAnimation({ opacity: 1, transform: 'translate(0%,0%)' });
    } else {
      setCardsAnimation({ opacity: 0, transform: 'translate(100%,100%)' });
    }
  }, [isVisible, setCardsAnimation]);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(state) => setIsVisible(state)}
    >
      <Container ref={conatainerRef}>
        <Slider>
          {isDesktop ? (
            <Cursor
              ref={cursorRef}
              hover={cardHover}
              text={cardHover ? 'See More' : 'Drag'}
            />
          ) : null}
          <CardsContainer ref={cardsContainerRef} style={cardsAnimation}>
            {items.map((el, i) => (
              <Card
                key={i}
                enter={enterHandler}
                leave={leaveHandler}
                source={el}
                text="Lorem ipsum dolor sit amet."
              />
            ))}
          </CardsContainer>
        </Slider>
      </Container>
    </VisibilitySensor>
  );
};
