import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const HorizontalScroll = (props) => {
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const calcDynamicHeight = (objectWidth) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh;
  };

  const handleDynamicHeight = useCallback(() => {
    const objectWidth = objectRef.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }, []);

  const applyScrollListener = () => {
    setTranslateX(-containerRef.current.offsetTop);
  };

  useEffect(() => {
    handleDynamicHeight();
    window.addEventListener('resize', handleDynamicHeight);
    window.addEventListener('scroll', applyScrollListener);

    return () => {
      window.removeEventListener('resize', handleDynamicHeight);
      window.removeEventListener('scroll', applyScrollListener);
    };
  }, [handleDynamicHeight]);

  return (
    <HorizontalSection style={props.style}>
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <CardsContainer>{props.children}</CardsContainer>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
    </HorizontalSection>
  );
};
