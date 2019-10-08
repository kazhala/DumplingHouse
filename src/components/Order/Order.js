import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogContent } from '../FoodDialog/FoodDialog';
import { DialogFooter as OrderFooter } from '../FoodDialog/FoodDialog';
import { formatString } from '../../Data/FoodData';

const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: #eee;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
    display: flex;
    flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
    ${props =>
        props.editable
            ? `
        &:hover {
            cursor: pointer;
            background-color: #e7e7e7;
        }
    `
            : `
        pointer-events: none;
    `}
`;

const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

const DetailItem = styled.div`
    color: grey;
    font-size: 10px;
    padding-left: 37px;
`;

const Order = props => {
    const { orders, setOrders, setOpenFood, login, user } = props;

    const bottomEl = useRef(null);

    useEffect(() => {
        const scrollToBottom = () => {
            bottomEl.current.scrollIntoView({ behavior: 'smooth' });
        };
        if (bottomEl.current) {
            scrollToBottom();
        }
    }, [orders]);

    const handleDeleteItem = (e, index) => {
        e.stopPropagation();
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    const subTotal = orders.reduce((total, order) => {
        return total + order.orderPrice;
    }, 0);

    return (
        <OrderStyled>
            {orders.length === 0 ? (
                <OrderContent>
                    Your order is looking pretty empty...
                </OrderContent>
            ) : (
                <OrderContent>
                    <OrderContainer>Your Order:</OrderContainer>{' '}
                    {orders.map((order, index) => (
                        <OrderContainer key={order.name} editable>
                            <OrderItem
                                onClick={() => setOpenFood({ ...order, index })}
                            >
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                    onClick={e => handleDeleteItem(e, index)}
                                >
                                    <span role="img" aria-label="garbage emoji">
                                        🗑️
                                    </span>
                                </div>
                                <div>{formatString(order.orderPrice)}</div>
                            </OrderItem>

                            <DetailItem>
                                {order.toppings
                                    .filter(topping => topping.checked)
                                    .map(checkedTopping => checkedTopping.name)
                                    .join(', ')}
                            </DetailItem>
                            {order.choice && (
                                <DetailItem>{order.choice}</DetailItem>
                            )}
                        </OrderContainer>
                    ))}
                    <div ref={bottomEl} />
                </OrderContent>
            )}

            <OrderContainer
                style={{
                    borderTop: '1px solid grey',
                    borderBottom: 'none',
                    marginBottom: '5px'
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
            <OrderFooter>
                <ConfirmButton
                    onClick={() => {
                        if (user) {
                            console.log('logged in');
                        } else {
                            login();
                        }
                    }}
                >
                    Checkout
                </ConfirmButton>
            </OrderFooter>
        </OrderStyled>
    );
};

export default Order;
