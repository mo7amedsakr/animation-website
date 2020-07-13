import React, { FC } from 'react';
import { Header } from './Header/Header';
// import { Wave } from './Wave/Wave';
import { Horizontal } from './Horizontal/Horizontal';
// import { Word } from './Word/Word';
import { Drag } from './Drag/Drag';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

export interface HomeProps {}

export const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <PageAnimation title="Home" />
      <Header />
      {/* <Wave /> */}
      <Horizontal />
      {/* <Word /> */}
      <Drag />
    </>
  );
};
