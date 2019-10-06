import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/title';
import { pizzaRed } from '../../Styles/colors';

const QuantityInputStyled = styled.input`
    font-size: 18px;
    text-align: center;
    width: 24px;
    border: none;
    outline: none;
`;

const IncrementContainer = styled(Title)`
    display: flex;
    height: 24px;
`;

const IncrementButton = styled.div`
    width: 23px;
    color: ${pizzaRed};
    font-size: 20px;
    text-align: center;
    line-height: 23px;
    margin: 0px 10px;
    border: 1px solid ${pizzaRed};
    ${props =>
        props.disabled &&
        `
        opacity: 0.5;
        pointer-events: none;
    `}
    &:hover {
        cursor: pointer;
        background-color: #ffe3e3;
    }
`;

const QuantityInput = props => {
    const { quantity } = props;

    return (
        <IncrementContainer>
            <div>Quantity: </div>
            <IncrementButton
                disabled={quantity.value === 1}
                onClick={() => quantity.setValue(prevValue => prevValue - 1)}
            >
                -
            </IncrementButton>
            <QuantityInputStyled {...quantity} />
            <IncrementButton
                onClick={() => quantity.setValue(prevValue => prevValue + 1)}
            >
                +
            </IncrementButton>
        </IncrementContainer>
    );
};

export default QuantityInput;
