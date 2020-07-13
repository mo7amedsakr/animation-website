import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { NavigationIcon } from './components/Navigation/NavigationIcon';
import { Transition } from 'react-transition-group';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './containers/Footer/Footer';

export interface LayoutProps {}

const Container = styled.div``;
const Main = styled.main`
  position: relative;
  z-index: 3;
`;

export const Layout: FC<LayoutProps> = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <Container>
      <NavigationIcon click={toggleNav} isOpen={isNavOpen} />

      <Transition in={isNavOpen} timeout={1000} mountOnEnter unmountOnExit>
        {() => <Navigation isOpen={isNavOpen} close={toggleNav} />}
      </Transition>

      <Main>{props.children}</Main>
      <Footer />
    </Container>
  );
};
