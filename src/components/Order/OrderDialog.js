import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogShadow,
    DialogFooter,
    ConfirmButton
} from '../FoodDialog/styledDialog';
import { formatString } from '../../Data/FoodData';

const database = window.firebase.database();

const OrderDialog = props => {
    const { openOrder, setOpenOrder, orders, setOrders, user } = props;

    const [confirmed, setConfirmed] = useState(false);

    const clearOrders = () => {
        setOrders([]);
    };

    const sendOrder = (orders, { email, displayName, uid }) => {
        const newOrderRef = database
            .ref(`orders`)
            .child(uid)
            .push();
        const newOrders = orders.map(order => {
            return Object.keys(order).reduce((acc, orderKey) => {
                if (!order[orderKey]) {
                    return acc;
                }
                if (orderKey === 'choices' || orderKey === 'description') {
                    return acc;
                }
                if (orderKey === 'toppings') {
                    return {
                        ...acc,
                        [orderKey]: order[orderKey]
                            .filter(top => top.checked)
                            .map(({ name }) => name)
                    };
                }
                return {
                    ...acc,
                    [orderKey]: order[orderKey]
                };
            }, {});
        });
        newOrderRef.set({
            order: newOrders,
            email,
            displayName
        });
    };

    const subTotal = orders.reduce((total, order) => {
        return total + order.orderPrice;
    }, 0);

    return openOrder ? (
        <React.Fragment>
            <DialogShadow
                onClick={() => {
                    clearOrders();
                    setOpenOrder(false);
                    setConfirmed(false);
                }}
            />
            <Dialog>
                <DialogContent>
                    {confirmed ? (
                        <>
                            <h2>
                                <span role="img" aria-label="truck">
                                    🚚
                                </span>
                                Your order is on the way!!
                            </h2>
                            <p>
                                {' '}
                                You have been emailed confirmation of your
                                order, Thanks for choosing Turramurra
                                DumplingHouse
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>
                                Below is your order total, once you click
                                confirm, we'll start cooking in a few minutes,
                                looking forward to see you in shop
                            </h2>
                            <p>Total: {formatString(subTotal * 1.07)}</p>
                        </>
                    )}
                </DialogContent>
                <DialogFooter>
                    {confirmed ? (
                        <ConfirmButton
                            onClick={() => {
                                setConfirmed(false);
                                setOpenOrder(false);
                            }}
                        >
                            I'm still hungry
                        </ConfirmButton>
                    ) : (
                        <>
                            <ConfirmButton
                                onClick={() => {
                                    setConfirmed(true);
                                    clearOrders();
                                    sendOrder(orders, user);
                                }}
                            >
                                Order
                            </ConfirmButton>
                            <ConfirmButton onClick={() => setOpenOrder(false)}>
                                Cancel
                            </ConfirmButton>
                        </>
                    )}
                </DialogFooter>
            </Dialog>
        </React.Fragment>
    ) : (
        <div />
    );
};

export default OrderDialog;
