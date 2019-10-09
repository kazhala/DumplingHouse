import React from 'react';
import styled from 'styled-components';

const RadioInput = styled.input`
    cursor: pointer;
`;

const Label = styled.label`
    cursor: pointer;
`;

const RadioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
`;

const Choices = props => {
    const { openFood, choiceRadio } = props;

    return (
        <React.Fragment>
            <h3>Choose one</h3>
            <RadioContainer>
                {openFood.choices.map(choice => (
                    <div key={choice} style={{ display: 'flex' }}>
                        <RadioInput
                            type="radio"
                            id={choice}
                            name="choice"
                            value={choice}
                            checked={choiceRadio.value === choice}
                            onChange={choiceRadio.onChange}
                        />
                        <Label htmlFor={choice}>{choice}</Label>
                    </div>
                ))}
            </RadioContainer>
        </React.Fragment>
    );
};

export default Choices;
