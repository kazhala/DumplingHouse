export const usePrice = order => {
    const toppingPrice = 0.5;
    const orderPrice =
        order.quantity *
        (order.price +
            order.toppings.filter(topping => topping.checked).length *
                toppingPrice);
    return {
        ...order,
        orderPrice: orderPrice
    };
};
