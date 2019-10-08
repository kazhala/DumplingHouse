import React from 'react';
import { foods, formatString } from '../../Data/FoodData';
import { FoodGrid, Food, FoodLabel, MenuStyled } from './FoodGrid';

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
