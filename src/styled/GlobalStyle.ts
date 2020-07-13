import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  *,
  *::after,
  *::before{
    box-sizing:inherit;
  }

  html{
    box-sizing:border-box;
    font-size:62.5%;
  }

  body{
    background-color:${(props) => props.theme.colors.bg};
    color:${(props) => props.theme.colors.white};
    font-size:${(props) => props.theme.fontSize.main}rem;
    font-weight:${(props) => props.theme.fontWeight.main};
    font-family:${(props) => props.theme.fontFamliy.main};
  }

  button,input{
    border: none;
    background-color: transparent;
    color: inherit;
    outline: none;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  a{
    text-decoration:none;
    color: inherit; 
  }
`;
