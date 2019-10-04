import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Navbar />
            <Banner />
            <Menu />
        </React.Fragment>
    );
}

export default App;
