import React, { FC, useEffect, useState } from 'react';
import { useSpring, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';
import {
  Container,
  Left,
  Right,
  MainUL,
  MainLI,
  SecondaryUL,
  SecondaryLI,
  Img,
} from './NavigationStyles';

import Photo1 from '../../assets/reform-collective-ultra-1.svg';
import Photo2 from '../../assets/reform-collective-ultra-2.svg';

export interface NavigationProps {
  isOpen: boolean;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const pages = useState([
    { to: '', text: 'Home' },
    { to: 'aboutus', text: 'About Us' },
    { to: 'contact', text: 'Contact' },
  ])[0];

  const trail = useTrail(pages.length, {
    config: { duration: 500, precision: 0 },
    delay: props.isOpen ? 400 : 150,
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? 'translateX(0%)' : 'translateX(-150%)',
    from: { opacity: 0, transform: 'translateX(-150%)' },
  });

  const [animationLeft, setAnimationLeft] = useSpring(() => ({
    config: {
      easing: (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2)),
      precision: 0,
    },
    transform: 'translateY(-100%)',
  }));

  const [animationRight, setAnimationRight] = useSpring(() => ({
    config: {
      easing: (t: number) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
      precision: 0,
    },
    transform: 'translateY(100%)',
  }));

  const [imgAnimationLeft, setImgAnimationLeft] = useSpring(() => ({
    // delay: 3000,
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-50%)' },
  }));
  const [imgAnimationRight, setImgAnimationRight] = useSpring(() => ({
    // delay: 3000,
    transform: 'translateX(0%)',
    from: { transform: 'translateX(50%)' },
  }));

  useEffect(() => {
    if (props.isOpen) {
      setAnimationLeft({ transform: 'translateY(0)' });
      setAnimationRight({ transform: 'translateY(0)' });
      setImgAnimationLeft({ transform: 'translateX(0%)', delay: 300 });
      setImgAnimationRight({ transform: 'translateX(0%)', delay: 300 });
    } else {
      setAnimationLeft({ transform: 'translateY(-100%)', delay: 500 });
      setAnimationRight({ transform: 'translateY(100%)', delay: 500 });
      setImgAnimationLeft({ transform: 'translateX(-50%)' });
      setImgAnimationRight({ transform: 'translateX(50%)' });
    }
  }, [
    props.isOpen,
    setAnimationLeft,
    setAnimationRight,
    setImgAnimationLeft,
    setImgAnimationRight,
  ]);

  return (
    <Container>
      <Left style={animationLeft}>
        <MainUL>
          {trail.map((animationProps, i) => (
            <MainLI style={animationProps} key={pages[i].text}>
              <Link to={`/${pages[i].to}`}>{pages[i].text}</Link>
            </MainLI>
          ))}
        </MainUL>
        <SecondaryUL>
          <SecondaryLI>
            <a
              href="https://www.facebook.com/mo7amedsakr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </SecondaryLI>
          <SecondaryLI>
            <a
              href="https://twitter.com/m07amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </SecondaryLI>
          <SecondaryLI>
            <a
              href="https://github.com/mo7amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </SecondaryLI>
          <SecondaryLI>
            <a
              href="https://lichess.org/@/mo7amedsakr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lichess
            </a>
          </SecondaryLI>
        </SecondaryUL>
      </Left>
      <Right style={animationRight}>
        <Img src={Photo1} alt="" draggable={false} style={imgAnimationLeft} />
        <Img src={Photo2} alt="" draggable={false} style={imgAnimationRight} />
      </Right>
    </Container>
  );
};
