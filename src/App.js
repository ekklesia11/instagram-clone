import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./theme/theme";
import Login from "./components/login/login";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  );
}

export default App;
