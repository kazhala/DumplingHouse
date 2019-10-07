import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { chineseYellow } from '../../Styles/colors';
import { Title } from '../../Styles/title';
import { formatString } from '../../Data/FoodData';
import QuantityInput from './QuantityInput';
import { useQuantity } from '../../Hooks/useQuantity';
import Toppings from './Toppings';
import { useToppings } from '../../Hooks/useToppings';
import { usePrice } from '../../Hooks/usePrice';
import { useChoiceRadio } from '../../Hooks/useChoiceRadio';
import Choices from './Choices';

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${props =>
        props.img ? `background-Image: url(${props.img});` : `min-height: 75px`}
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    font-size: 30px;
    padding: 5px 40px;
    top: ${props => (props.img ? '100px' : '20px')};
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
    box-shadow: 1px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    background-color: ${chineseYellow};
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    ${props =>
        props.disabled &&
        `
        pointer-events: none;
        opacity: 0.5;
        background-color: none;
    `}
`;

const Disclaimer = styled.div`
    font-size: 8px;
    opacity: 0.5;
`;

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
