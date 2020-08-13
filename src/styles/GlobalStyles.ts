import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input{
    font-family: Roboto, sans-serif;

    transition: color .2s ease-out;
  }

  :root {
    ${props => {
      const { theme } = props;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

  }
`;
