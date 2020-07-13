import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/GlobalStyle';
import { theme } from './styled/theme';
import { Layout } from './Layout';
import { Home } from './containers/Home/Home';
import { About } from './containers/About/About';

export const App = () => {
  const location = useLocation();
  const transitions = useTransition(
    location,
    (location) => location.pathname,
    {}
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route path="/" exact>
                <Home />
              </Route>
              {/* <Route path="/aboutus">
                <About />
              </Route> */}
            </Switch>
          </animated.div>
        ))}
      </Layout>
    </ThemeProvider>
  );
};
