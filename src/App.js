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
import { useAuth } from './Hooks/useAuth';

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const auth = useAuth();
    useTitle({ ...openFood, ...orders });

    return (
        <div
            style={{
                backgroundColor: '#eee',
                overflowY: 'hidden'
            }}
        >
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <Navbar {...auth} />
            <Order {...orders} {...openFood} {...auth} />
            <Banner />
            <Menu {...openFood} />
            <div style={{ height: '20px' }} />
        </div>
    );
}

export default App;
