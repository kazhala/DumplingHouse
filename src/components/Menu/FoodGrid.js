import styled from 'styled-components';
import { Title } from '../../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

export const Food = styled(Title)`
    height: 100px;
    background-image: ${props => `url(${props.img})`};
    background-position: center;
    background-size: cover;
    filter: contrast(0.75);
    padding: 10px;
    font-size: 20px;
    border-radius: 7px;
    box-shadow: 0px 0px 10px 0px grey;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
`;
