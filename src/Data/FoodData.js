export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza2.jpg',
        section: 'Pizza',
        price: 5.5
    },
    {
        name: 'Peperoni Pizza',
        img: '/img/pizza.jpeg',
        section: 'Pizza',
        price: 7
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chickenpizza.jpeg',
        section: 'Pizza',
        price: 8
    },
    {
        name: 'Healthy Pizza',
        img: '/img/healthypizza.jpeg',
        section: 'Pizza',
        price: 7
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich',
        price: 6
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich',
        price: 5
    },
    {
        name: 'Super Sandwich',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 7
    },
    {
        name: 'Fires',
        img: '/img/fries.jpeg',
        section: 'Sides',
        price: 3
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});

export const formatString = price => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};
