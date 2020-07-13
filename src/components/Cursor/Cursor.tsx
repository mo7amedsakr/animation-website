import React, { forwardRef } from 'react';
import { CursorElement } from './CursorStyles';

export interface CursorProps {
  text: string;
  hover: boolean;
}

export const Cursor = forwardRef<HTMLDivElement, CursorProps>((props, ref) => {
  return (
    <CursorElement ref={ref} hover={props.hover}>
      {props.text}
    </CursorElement>
  );
});
