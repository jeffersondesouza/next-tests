import App from "next/app";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#686868"
  }
};

const setBg = props => {
  return props.theme.colors.primary;
};

const GlobalStyle = createGlobalStyle`
   body {
    background: ${setBg};
    font-family: sans-serif;
    
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
