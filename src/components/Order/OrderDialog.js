import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogShadow,
    DialogFooter,
    ConfirmButton
} from '../FoodDialog/styledDialog';

const OrderDialog = props => {
    const { openOrder, setOpenOrder, setOrders } = props;

    const clearOrders = () => {
        setOrders([]);
        setOpenOrder(false);
    };

    return openOrder ? (
        <React.Fragment>
            <DialogShadow onClick={clearOrders} />
            <Dialog>
                <DialogContent>
                    <h2>
                        <span role="img" aria-label="truck">
                            🚚
                        </span>
                        Your order is on the way!!
                    </h2>
                    <p>
                        {' '}
                        You have been emailed confirmation of your order, Thanks
                        for choosing Turramurra DumplingHouse :)
                    </p>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={clearOrders}>
                        I'm still hungry
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </React.Fragment>
    ) : (
        <div />
    );
};

export default OrderDialog;
