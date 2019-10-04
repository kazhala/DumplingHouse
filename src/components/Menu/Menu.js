import React from 'react';
import style from 'styled-components';
import { foods } from '../../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = style.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

const Menu = props => {
    return (
        <MenuStyled>
            <h1>Menu</h1>
            <FoodGrid>
                {foods.map(food => (
                    <Food img={food.img}>
                        <FoodLabel>{food.name}</FoodLabel>
                    </Food>
                ))}
            </FoodGrid>
        </MenuStyled>
    );
};

export default Menu;
