import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogShadow,
    DialogFooter,
    ConfirmButton
} from '../FoodDialog/styledDialog';
import { Title } from '../../Styles/title';
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

    const shadowClicked = () => {
        if (confirmed) {
            setConfirmed(false);
            setOpenOrder(false);
            clearOrders();
        } else {
            setOpenOrder(false);
            setConfirmed(false);
        }
    };

    return openOrder ? (
        <React.Fragment>
            <DialogShadow onClick={shadowClicked} />
            <Dialog>
                <DialogContent>
                    {confirmed ? (
                        <>
                            <Title
                                style={{
                                    marginTop: '20px'
                                }}
                            >
                                <span role="img" aria-label="truck">
                                    🚚
                                </span>
                                Your order is on the way!!
                            </Title>
                            <p>
                                {' '}
                                You have been emailed confirmation of your
                                order, Thanks for choosing Turramurra
                                DumplingHouse
                            </p>
                        </>
                    ) : (
                        <>
                            <Title
                                style={{
                                    marginTop: '20px'
                                }}
                            >
                                Below is order's total amount, Click confirm to
                                order
                            </Title>
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
