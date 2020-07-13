import React, { FC } from 'react';
import { Header } from './Header/Header';
// import { Wave } from './Wave/Wave';
import { Horizontal } from './Horizontal/Horizontal';
// import { Word } from './Word/Word';
import { Drag } from './Drag/Drag';
// import { Footer } from './Footer/Footer';

export interface HomeProps {}

export const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Header />
      {/* <Wave /> */}
      <Horizontal />
      {/* <Word /> */}
      <Drag />
      {/* <Footer /> */}
    </>
  );
};
