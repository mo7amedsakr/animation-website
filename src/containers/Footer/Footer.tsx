import React, { FC } from 'react';
import { Container, FixedContainer } from './FooterStyles';

export interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <Container>
      <FixedContainer>
        <h1>
          Don't be shy,
          <br /> say hi.
        </h1>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/mo7amedsakr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/m07amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mo7amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://lichess.org/@/mo7amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lichess
            </a>
          </li>
        </ul>
      </FixedContainer>
    </Container>
  );
};
