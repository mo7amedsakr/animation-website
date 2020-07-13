import styled from 'styled-components';
import MainImg from '../../../assets/3peeps.jpg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${MainImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-fill-color: transparent;
  font-size: 50rem;
`;

export const Text = styled.h1`
  color: transparent;
  font-size: 50rem;
  background-image: url(${MainImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
`;
