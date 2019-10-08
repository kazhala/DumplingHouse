import { useState } from 'react';

export const useOrderDialog = () => {
    const [openOrder, setOpenOrder] = useState(false);
    return {
        openOrder,
        setOpenOrder
    };
};
