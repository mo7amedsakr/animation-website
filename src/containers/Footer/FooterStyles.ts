import styled from 'styled-components';

export const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 10rem;
`;

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: white;
  color: black;
  z-index: 1;

  h1 {
    font-size: 20rem;
    font-weight: 400;
    span {
      font-weight: 600;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 5rem;
  }
  li {
    margin-right: 3rem;
    font-size: 4rem;
  }
`;
