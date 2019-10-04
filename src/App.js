import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Navbar />
            <div>hello world</div>
        </React.Fragment>
    );
}

export default App;
