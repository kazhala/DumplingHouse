import React, { useRef, useEffect } from 'react';
import {
    OrderStyled,
    OrderContent,
    OrderContainer,
    OrderItem,
    DetailItem,
    OrderButton
} from './styledOrder';
import { DialogFooter as OrderFooter } from '../FoodDialog/styledDialog';
import { formatString } from '../../Data/FoodData';

const Order = props => {
    const { orders, setOrders, setOpenFood, login, user, setOpenOrder } = props;

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
                        <OrderContainer key={index} editable>
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
                <OrderButton
                    disabled={orders.length < 1}
                    onClick={() => {
                        if (user) {
                            setOpenOrder(true);
                        } else {
                            login();
                        }
                    }}
                >
                    Checkout
                </OrderButton>
            </OrderFooter>
        </OrderStyled>
    );
};

export default Order;
