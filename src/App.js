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
import OrderDialog from './components/Order/OrderDialog';
import { useOrderDialog } from './Hooks/useOrderDialog';
import SideBar from './components/SideBar/SideBar';
import { useSideBar } from './Hooks/useSideBar';

// TODO: comments
// TODO: fetch data from server

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const auth = useAuth();
    const orderDialog = useOrderDialog();
    const sideBar = useSideBar();
    useTitle({ ...openFood, ...orders });

    return (
        <div
            style={{
                backgroundColor: '#eee',
                overflowY: 'hidden'
            }}
        >
            <GlobalStyle />
            <OrderDialog {...orderDialog} {...orders} {...auth} />
            <FoodDialog {...openFood} {...orders} />
            <Navbar {...auth} {...sideBar} />
            <SideBar
                {...sideBar}
                {...orders}
                {...openFood}
                {...auth}
                {...orderDialog}
            />
            <Order {...orders} {...openFood} {...auth} {...orderDialog} />
            <Banner />
            <Menu {...openFood} />
            <div style={{ height: '20px' }} />
        </div>
    );
}

export default App;
