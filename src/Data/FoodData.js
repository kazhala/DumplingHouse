export const foodItems = [
    {
        name: 'Traditional Dumpling',
        section: 'Dumpling',
        price: 12.8,
        img: '/img/tradDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg']
    },
    {
        name: 'Fried Dumpling',
        section: 'Dumpling',
        price: 13.8,
        img: '/img/friedDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg']
    },
    {
        name: 'Steamed Dumpling',
        section: 'Dumpling',
        price: 12.8,
        img: '/img/steamDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg']
    },
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
    },
    {
        name: 'Soda',
        price: 2.5,
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Root Bear']
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
