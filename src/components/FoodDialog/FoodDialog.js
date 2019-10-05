import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';

const Dialog = styled.div`
    width: 500px;
    height: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${props => `background-Image: url(${props.img});`}
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
`;

const FoodDialog = props => {
    return props.food ? (
        <React.Fragment>
            <DialogShadow onClick={() => props.setOpenFood(null)} />
            <Dialog>
                <DialogBanner img={props.food.img}>
                    <DialogBannerName>{props.food.name}</DialogBannerName>
                </DialogBanner>
            </Dialog>
        </React.Fragment>
    ) : null;
};

export default FoodDialog;
