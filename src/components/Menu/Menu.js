import React from 'react';
import style from 'styled-components';
import { foods, formatString } from '../../Data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = style.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

const Menu = props => {
    return (
        <MenuStyled>
            {Object.keys(foods).map(section => (
                <div key={section}>
                    <h1>{section}</h1>
                    <FoodGrid>
                        {foods[section].map(food => (
                            <Food
                                img={food.img}
                                key={food.name}
                                onClick={() => props.setOpenFood(food)}
                            >
                                <FoodLabel>
                                    <div>{food.name}</div>
                                    <div>{formatString(food.price)}</div>
                                </FoodLabel>
                            </Food>
                        ))}
                    </FoodGrid>
                </div>
            ))}
        </MenuStyled>
    );
};

export default Menu;
