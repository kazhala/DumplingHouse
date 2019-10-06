import React from 'react';
import styled from 'styled-components';

const RadioInput = styled.input`
    cursor: pointer;
`;

const Label = styled.label`
    cursor: pointer;
`;

const Choices = props => {
    const { openFood, choiceRadio } = props;

    return (
        <React.Fragment>
            <h3>Choose one</h3>
            {openFood.choices.map(choice => (
                <React.Fragment key={choice}>
                    <RadioInput
                        type="radio"
                        id={choice}
                        name="choice"
                        value={choice}
                        checked={choiceRadio.value === choice}
                        onChange={choiceRadio.onChange}
                    />
                    <Label for={choice}>{choice}</Label>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export default Choices;
