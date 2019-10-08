import React from 'react';
import {
    Dialog,
    DialogBanner,
    DialogBannerName,
    DialogContent,
    DialogFooter,
    DialogShadow,
    ConfirmButton,
    Disclaimer
} from './styledDialog';
import { formatString } from '../../Data/FoodData';
import QuantityInput from './QuantityInput';
import { useQuantity } from '../../Hooks/useQuantity';
import Toppings from './Toppings';
import { useToppings } from '../../Hooks/useToppings';
import { usePrice } from '../../Hooks/usePrice';
import { useChoiceRadio } from '../../Hooks/useChoiceRadio';
import Choices from './Choices';

const FoodDialogContainer = props => {
    const { openFood, setOpenFood, orders, setOrders } = props;

    const quantity = useQuantity(openFood && openFood.quantity);

    const toppings = useToppings(openFood.toppings);

    const choiceRadio = useChoiceRadio(openFood.choice);

    const isEditing = openFood.index > -1;

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    };
    const newOrder = usePrice(order);

    const addToOrders = () => {
        setOrders([...orders, newOrder]);
        setOpenFood(null);
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openFood.index] = newOrder;
        setOrders(newOrders);
        setOpenFood(null);
    };

    const hasToppings = food => {
        return food.name.includes('Pizza');
    };
    return (
        <React.Fragment>
            <DialogShadow onClick={() => setOpenFood(null)} />
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName img={openFood.img}>
                        {openFood.name}
                    </DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity} />
                    {openFood.description && (
                        <Disclaimer>{openFood.description}</Disclaimer>
                    )}
                    {hasToppings(openFood) && (
                        <React.Fragment>
                            <h3>Would you like toppings?</h3>
                            <Toppings {...toppings} />
                        </React.Fragment>
                    )}
                    {openFood.choices && (
                        <Choices
                            openFood={openFood}
                            choiceRadio={choiceRadio}
                        />
                    )}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={isEditing ? editOrder : addToOrders}
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        {isEditing ? 'Edit order: ' : 'Add to order: '}
                        {formatString(newOrder.orderPrice)}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </React.Fragment>
    );
};

const FoodDialog = props => {
    const { openFood } = props;
    if (!openFood) return null;
    return <FoodDialogContainer {...props} />;
};

export default FoodDialog;
