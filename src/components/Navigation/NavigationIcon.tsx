import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

export interface NavigationIconProps {
  isOpen: boolean;
  click: () => void;
}

const Container = styled.div`
  position: fixed;
  right: 8rem;
  top: 5rem;
  z-index: 100;
  cursor: pointer;
  mix-blend-mode: difference;
`;

const Line = styled(animated.div)<{ readonly first?: string }>`
  width: 4rem;
  height: 0.2rem;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) => (props.first === 'true' ? `margin-bottom: 1rem;` : null)}
`;

export const NavigationIcon: FC<NavigationIconProps> = (props) => {
  const [lineTop, setLineTop] = useSpring(() => ({
    transform: 'rotate(0deg)',
    transformOrigin: '30% 30%',
  }));
  const [lineBottom, setLineBottom] = useSpring(() => ({
    transform: 'rotate(0deg)',
    transformOrigin: '30% 30%',
  }));

  useEffect(() => {
    if (props.isOpen) {
      setLineTop({
        transform: 'rotate(45deg)',
      });
      setLineBottom({
        transform: 'rotate(-45deg)',
      });
    } else {
      setLineTop({
        transform: 'rotate(0deg)',
      });
      setLineBottom({
        transform: 'rotate(0deg)',
      });
    }
  }, [props.isOpen, setLineTop, setLineBottom]);

  return (
    <Container onClick={props.click}>
      <Line first="true" style={lineTop} />
      <Line style={lineBottom} />
    </Container>
  );
};
