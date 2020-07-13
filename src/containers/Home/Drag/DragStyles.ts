import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const CardsContainer = styled(animated.div)`
  align-items: center;
  padding: 5rem;
  & > *:not(:last-child) {
    margin-right: 5rem;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  height: auto;
  width: 60rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    transition: all 1s;
    width: 100%;
  }

  p {
    margin-top: 1rem;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
