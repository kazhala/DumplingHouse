import { useState } from 'react';

export const useToppings = defaultToppings => {
    const [toppings, setToppings] = useState(
        defaultToppings || getDefaultToppings()
    );

    const checkTopping = index => {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    };

    return {
        checkTopping,
        toppings
    };
};

const toppingsList = [
    'Extra Cheese',
    'Peperoni',
    'Sausage',
    'Onions',
    'Peppers',
    'Pineapples',
    'Ham',
    'Spinach',
    'Artichokes',
    'Mushrooms',
    'Anchovies'
];

const getDefaultToppings = () => {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
};
