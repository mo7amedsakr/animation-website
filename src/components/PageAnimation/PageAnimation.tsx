import React, { FC, useState, useEffect } from 'react';
import { Container, Title } from './PageAnimationStyles';
import { useSpring } from 'react-spring';
import { Transition } from 'react-transition-group';

export interface PageAnimationProps {
  title: string;
}

export const PageAnimation: FC<PageAnimationProps> = (props) => {
  const [render, serRender] = useState(true);

  const containerAnimation = useSpring({
    config: {
      precision: 0,
    },
    delay: 1750,
    transform: 'translateY(-100%)',
    from: {
      transform: 'translateY(0%)',
    },
  });

  const titleAnimation = useSpring({
    config: {
      precision: 0,
      duration: 1700,
    },
    opacity: 0,
    transform: 'translateX(0%)',
    from: {
      opacity: 1,
      transform: 'translateX(100%)',
    },
  });

  useEffect(() => {
    const time = setTimeout(() => {
      serRender(false);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <Transition mountOnEnter unmountOnExit timeout={1} in={render}>
      {() => (
        <Container style={containerAnimation}>
          <Title style={titleAnimation}>{props.title}</Title>
        </Container>
      )}
    </Transition>
  );
};
