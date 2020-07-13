import React, { FC } from 'react';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

export interface AboutProps {}

export const About: FC<AboutProps> = (props) => {
  return (
    <div style={{ backgroundColor: 'hotping', height: '100vh' }}>
      <PageAnimation title="About Us" />
    </div>
  );
};
