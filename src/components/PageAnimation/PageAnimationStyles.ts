import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10rem;
`;

export const Title = styled(animated.h1)`
  font-size: 30rem;
`;
