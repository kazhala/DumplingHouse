import styled from 'styled-components';
import { Title } from '../../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-bottom: 40px;
`;

export const Food = styled.div`
    height: 100px;
    background-image: ${props => `url(${props.img})`};
    background-position: center;
    background-size: 100%;
    filter: contrast(0.75);
    padding: 10px;
    font-size: 20px;
    border-radius: 7px;
    /* margin-top: 3px; */
    box-shadow: 0px 0px 2px 0px grey;
    transition-property: box-shadow margin-top filter background-size;
    transition-duration: 0.5s;
    &:hover {
        /* margin-top: 0px;
        margin-bottom: 3px; */
        cursor: pointer;
        box-shadow: 5px 5px 10px 0px grey;
        background-size: 115%;
        filter: contrast(1);
    }
`;

export const FoodLabel = styled(Title)`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
`;
