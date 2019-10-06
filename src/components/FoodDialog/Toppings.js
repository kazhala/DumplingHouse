import React from 'react';
import styled from 'styled-components';

const ToppingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckBox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;

const CheckBoxLabel = styled.label`
    cursor: pointer;
`;

const Toppings = props => {
    const { toppings, checkTopping } = props;

    return (
        <ToppingGrid>
            {toppings.map((topping, index) => (
                <CheckBoxLabel key={index}>
                    <ToppingCheckBox
                        type="checkbox"
                        onChange={() => checkTopping(index)}
                        checked={topping.checked}
                    />
                    {topping.name}
                </CheckBoxLabel>
            ))}
        </ToppingGrid>
    );
};

export default Toppings;
