import { useState } from 'react';

export const useChoiceRadio = defaultChoice => {
    const [value, setValue] = useState(defaultChoice);
    const onChange = e => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange
    };
};
