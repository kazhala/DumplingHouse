import React from 'react';
import styled, { css } from 'styled-components';
import {
    OrderButton,
    OrderContainer,
    OrderContent,
    OrderItem,
    DetailItem
} from '../Order/styledOrder';
import { DialogFooter, DialogShadow } from '../FoodDialog/styledDialog';
import { UserStatus, ButtonContainer } from '../Navbar/Navbar';
import { formatString } from '../../Data/FoodData';

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 50%;
    z-index: 13;
    margin-top: 50px;
    position: fixed;
    background-color: white;
    opacity: 0.9;
    box-shadow: 0px 0px 1px 0px black;
    margin-left: calc(100% - 50%);
    transform: translateX(110vw);
    transition: all 0.3s ease-out;
    ${props =>
        props.show &&
        css`
            transform: translateX(0);
        `}
    @media (min-width: 502px) {
        display: none;
    }
`;

const SideBarItem = styled(OrderItem)`
    font-size: 10px;
`;

const SideBarShadow = styled(DialogShadow)`
    opacity: 0.1;
    @media (min-width: 502px) {
        display: none;
    }
`;

const SideBar = props => {
    const {
        orders,
        setOrders,
        setOpenFood,
        login,
        user,
        setOpenOrder,
        setShowSideBar,
        showSideBar,
        loading,
        logout
    } = props;

    const handleDeleteItem = (e, index) => {
        e.stopPropagation();
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    const handleAuthClick = () => {
        if (user) {
            logout();
        } else {
            login();
        }
    };

    const subTotal = orders.reduce((total, order) => {
        return total + order.orderPrice;
    }, 0);

    const openFromSideBar = (order, index) => {
        setOpenFood({ ...order, index });
        setShowSideBar(false);
    };

    return (
        <React.Fragment>
            {showSideBar && (
                <SideBarShadow onClick={() => setShowSideBar(false)} />
            )}
            <SideBarContainer show={props.showSideBar}>
                <OrderContent>
                    <UserStatus>
                        {loading ? (
                            'Loading...'
                        ) : (
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '60px 1fr',
                                    gridGap: '10px'
                                }}
                            >
                                <ButtonContainer onClick={handleAuthClick}>
                                    <span role="img" aria-label="person">
                                        👤
                                    </span>{' '}
                                    {user ? (
                                        <span>
                                            Logged in as {user.displayName}
                                        </span>
                                    ) : (
                                        <span>Login</span>
                                    )}
                                </ButtonContainer>
                                <ButtonContainer>
                                    Previous Orders
                                </ButtonContainer>
                            </div>
                        )}
                    </UserStatus>
                    <OrderContainer>Your Order: </OrderContainer>
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <OrderContainer key={index} editable>
                                <SideBarItem
                                    onClick={() =>
                                        openFromSideBar(order, index)
                                    }
                                    style={{
                                        justifyItems: 'center'
                                    }}
                                >
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span
                                            role="img"
                                            aria-label="garbage emoji"
                                            onClick={e =>
                                                handleDeleteItem(e, index)
                                            }
                                        >
                                            🗑️
                                        </span>
                                    </div>
                                    <div>{formatString(order.orderPrice)}</div>
                                </SideBarItem>
                                <DetailItem>
                                    {order.toppings
                                        .filter(topping => topping.checked)
                                        .map(
                                            checkedTopping =>
                                                checkedTopping.name
                                        )
                                        .join(', ')}
                                </DetailItem>
                                {order.choice && (
                                    <DetailItem>{order.choice}</DetailItem>
                                )}
                            </OrderContainer>
                        ))
                    ) : (
                        <h3>Your order is empty at the moment</h3>
                    )}
                </OrderContent>
                <OrderContainer
                    style={{
                        borderTop: '1px solid grey',
                        borderBottom: 'none',
                        marginBottom: '5px',
                        fontSize: '10px'
                    }}
                >
                    <OrderItem>
                        <div></div>
                        <div>Sub-Total</div>
                        <div>{formatString(subTotal)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div></div>
                        <div>Tax</div>
                        <div>{formatString(subTotal * 0.07)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div></div>
                        <div>Total</div>
                        <div>{formatString(subTotal * 1.07)}</div>
                    </OrderItem>
                </OrderContainer>
                <DialogFooter>
                    <OrderButton
                        disabled={orders.length < 1}
                        onClick={() => {
                            if (user) {
                                setOpenOrder(true);
                                setShowSideBar(false);
                            } else {
                                setShowSideBar(false);
                                login();
                            }
                        }}
                    >
                        Order
                    </OrderButton>
                </DialogFooter>
            </SideBarContainer>
        </React.Fragment>
    );
};

export default SideBar;
