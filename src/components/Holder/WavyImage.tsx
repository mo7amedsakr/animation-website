import React, { FC, useState, useEffect, useRef } from 'react';

export interface WavyImageProps {
  source: any;
  action: () => void;
}

export const WavyImage: FC<WavyImageProps> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [count, setCount] = useState(0);
  const img = useRef(new Image());
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    img.current.src = props.source;
  }, []);

  const waves = (playCount: any) => {
    img.current.src = props.source;
  };

  const toggleHover = () => {};

  return (
    <div>
      <img style={{ display: 'none' }} src={props.source} onLoad={waves} />
      <canvas
        width="480"
        height="480"
        ref={canvas}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={props.action}
      ></canvas>
    </div>
  );
};
