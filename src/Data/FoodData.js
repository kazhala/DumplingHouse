export const foodItems = [
    {
        name: 'Traditional Dumpling',
        section: 'Dumpling',
        price: 12.8,
        img: '/img/tradDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg'],
        description: 'Each serve comes with 12 dumplings'
    },
    {
        name: 'Fried Dumpling',
        section: 'Dumpling',
        price: 13.8,
        img: '/img/friedDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg'],
        description: 'Each serve comes with 12 dumplings'
    },
    {
        name: 'Steamed Dumpling',
        section: 'Dumpling',
        price: 12.8,
        img: '/img/steamDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg'],
        description: 'Each serve comes with 12 dumplings'
    },
    {
        name: 'Wonton',
        section: 'Dumpling',
        price: 9.9,
        img: '/img/wontonDump.jpg',
        choices: ['chicken', 'beef', 'vegan', 'egg'],
        description: 'Each serve comes with 12 wonton'
    },
    {
        name: 'Steamed BaoZi',
        section: 'BaoZi/Bun',
        price: 11.9,
        img: '/img/traditionalBun.jpeg',
        choices: ['chicken', 'beef', 'vegan', 'egg'],
        description: 'Each serve comes with 6 baozi'
    },
    {
        name: 'XiaoLongBao',
        section: 'BaoZi/Bun',
        price: 11.9,
        img: '/img/xiaolongBun.jpg',
        description: 'Each serve comes with 10 xiaolongbao'
    },
    {
        name: 'Shengjian(Fried Bun)',
        section: 'BaoZi/Bun',
        price: 12.9,
        img: '/img/friedBun.jpg',
        description:
            'Each serve comes with 10 shengjian (They are relative smaller)'
    },
    {
        name: 'Sichuan Noodle',
        section: 'Noodle',
        price: 9,
        img: '/img/spicyNoodle.jpeg',
        description: 'Spicy Sichuan noodle, warning (hot)'
    },
    {
        name: 'Beef Noodle',
        section: 'Noodle',
        price: 10,
        img: '/img/beefNoodle.jpg'
    },
    {
        name: 'Cheese Pizza',
        img: '/img/pizza2.jpg',
        section: 'Others',
        price: 5.5
    },
    {
        name: 'Peperoni Pizza',
        img: '/img/pizza.jpeg',
        section: 'Others',
        price: 7
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chickenpizza.jpeg',
        section: 'Others',
        price: 8
    },
    {
        name: 'Wrap',
        img: '/img/gyro.jpeg',
        section: 'Others',
        price: 5,
        choices: ['chicken', 'beef', 'vegan']
    },
    {
        name: 'Spaghetti',
        img: '/img/spaghetti.jpg',
        section: 'Others',
        price: 13
    },
    {
        name: 'Super Sandwich',
        img: '/img/sandwich.jpeg',
        section: 'Others',
        price: 7,
        choices: ['chicken', 'beef', 'vegan']
    },
    {
        name: 'Fires',
        img: '/img/fries.jpeg',
        section: 'Others',
        price: 3
    },
    {
        img: '/img/soda.jpg',
        name: 'Soda',
        price: 2.5,
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Root Bear']
    },
    {
        img: '/img/drinks.jpeg',
        name: 'HomeMade Drinks',
        price: 6,
        section: 'Drinks',
        choices: ['Lemonade', 'PassionFruit', 'Secret Blend']
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
