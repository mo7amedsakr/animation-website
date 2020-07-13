import React, { FC, useRef, useLayoutEffect } from 'react';
import { Container, Img, H1 } from './HeaderStyles';
import { useMouse, useMedia } from 'react-use';
import Photo from '../../../assets/incubation_cover01.jpg';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { elX, elY } = useMouse(mouseRef);

  const isDesktop = useMedia('(min-width: 992px)');

  useLayoutEffect(() => {
    if (elX > 0 && elY > 0 && isDesktop) {
      imgRef.current!.style.left = `${elX - imgRef.current!.width / 2}px`;
      imgRef.current!.style.top = `${elY - imgRef.current!.height / 2}px`;
    }
  }, [elX, elY, isDesktop]);

  return (
    <Container ref={mouseRef}>
      <Img src={Photo} alt="" ref={imgRef} draggable={false} />
      <H1>Lorem, ipsum dolor.</H1>
    </Container>
  );
};
