import styled from 'styled-components';

export const CursorElement = styled.div<{ hover: boolean }>`
  position: absolute;
  width: 15rem;
  height: 7rem;
  ${(props) => `
  
  background-color:${
    props.hover ? props.theme.colors.black : props.theme.colors.white
  };
  color: ${props.hover ? props.theme.colors.white : props.theme.colors.black};
  `}
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  z-index: 1;
`;
