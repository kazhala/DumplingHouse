import { useState } from 'react';

export const useSideBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    return {
        showSideBar,
        setShowSideBar
    };
};
