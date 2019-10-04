export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza2.jpg',
        section: 'Pizza'
    },
    {
        name: 'Peperoni Pizza',
        img: '/img/pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chickenpizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Healthy Pizza',
        img: '/img/healthypizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Super Sandwich',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Fires',
        img: '/img/fries.jpeg',
        section: 'Sides'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
