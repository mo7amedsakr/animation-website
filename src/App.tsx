import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/GlobalStyle';
import { theme } from './styled/theme';
import { Layout } from './Layout';
import { Home } from './containers/Home/Home';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};
