import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import FoodDialog from './components/FoodDialog/FoodDialog';
import Order from './components/Order/Order';

function App() {
    const [openFood, setOpenFood] = useState(null);

    return (
        <React.Fragment>
            <GlobalStyle />
            <FoodDialog food={openFood} setOpenFood={setOpenFood} />
            <Navbar />
            <Order />
            <Banner />
            <Menu setOpenFood={setOpenFood} />
        </React.Fragment>
    );
}

export default App;
