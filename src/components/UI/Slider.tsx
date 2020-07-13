import React, {
  FC,
  MouseEvent,
  TouchEvent,
  CSSProperties,
  useState,
  useRef,
} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  user-select: none;
  will-change: scroll-position;
  & > * {
    display: inline-flex;
  }
`;

export interface SliderProps {
  speed?: number;
  style?: CSSProperties;
}

type SliderEvent = MouseEvent | TouchEvent;

export const Slider: FC<SliderProps> = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slider = useRef<HTMLDivElement>(null);

  const dragDownHandler = (e: SliderEvent) => {
    setIsDown(true);

    const pageX =
      e.nativeEvent.type === 'touchstart'
        ? (e as TouchEvent).touches[0].pageX
        : (e as MouseEvent).pageX;

    setStartX(pageX - slider.current!.offsetLeft);
    setScrollLeft(slider.current!.scrollLeft);
  };

  const dragMoveHandler = (e: SliderEvent) => {
    if (!isDown) return;

    let pageX: number;

    if (e.nativeEvent.type === 'touchmove') {
      pageX = (e as TouchEvent).touches[0].pageX;
    } else {
      e.preventDefault();
      pageX = (e as MouseEvent).pageX;
    }

    const x = pageX - slider.current!.offsetLeft;
    const slide = (x - startX) * (props.speed || 1);
    slider.current!.scrollLeft = scrollLeft - slide;
  };

  const dragDisableHandler = () => setIsDown(false);

  return (
    <Container
      ref={slider}
      style={{ cursor: isDown ? 'grabbing' : 'grab', ...props.style }}
      onMouseDown={dragDownHandler}
      onMouseMove={dragMoveHandler}
      onMouseUp={dragDisableHandler}
      onMouseLeave={dragDisableHandler}
      onTouchStart={dragDownHandler}
      onTouchMove={dragMoveHandler}
      onTouchEnd={dragDisableHandler}
    >
      {props.children}
    </Container>
  );
};
