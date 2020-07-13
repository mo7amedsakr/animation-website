import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.bg};
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Img = styled.img`
  position: absolute;
  opacity: 0.7;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  z-index: 2;
  user-select: none;
`;

export const H1 = styled.h1`
  position: relative;
  font-weight: 200;
  font-size: 10rem;
  z-index: 3;
  text-align: center;
`;
