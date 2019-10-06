import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import FoodDialog from './components/FoodDialog/FoodDialog';
import Order from './components/Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({ ...openFood, ...orders });

    return (
        <React.Fragment>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <Navbar />
            <Order {...orders} />
            <Banner />
            <Menu {...openFood} />
        </React.Fragment>
    );
}

export default App;
