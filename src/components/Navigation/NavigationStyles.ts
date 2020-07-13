import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  display: flex;
`;

const Main = styled(animated.div)`
  background-color: rgb(11, 13, 15);
  height: 100vh;
  width: 50vw;
`;

export const Left = styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled(Main)`
  position: relative;
`;

export const MainUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
  font-weight: 700;
  font-size: 8rem;
`;

export const MainLI = styled(animated.li)`
  position: relative;
  margin-bottom: 8rem;
  &::before {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0%;
    height: 0.7rem;
    background-color: currentColor;
    transition: width 0.5s ease;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

export const SecondaryUL = styled.ul`
  color: ${(props) => props.theme.colors.gray};
  list-style: none;
  display: flex;
  font-size: 1.8rem;
`;
export const SecondaryLI = styled.li`
  margin-right: 2rem;
`;

export const Img = styled(animated.img)`
  position: absolute;
  bottom: 8rem;
  right: 8rem;
  height: 45rem;
  user-select: none;
  animation-iteration-count: infinite;
`;
