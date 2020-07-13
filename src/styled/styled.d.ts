import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      black: string;
      white: string;
      gray: string;
      bg: string;
    };

    fontFamliy: { main: string };

    fontSize: { main: number };

    fontWeight: { main: number };
  }
}
