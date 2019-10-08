import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { chineseYellow } from '../../Styles/colors';
import { Title } from '../../Styles/title';

export const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 12;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

export const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 11;
`;

export const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${props =>
        props.img ? `background-Image: url(${props.img});` : `min-height: 75px`}
    background-position: center;
    background-size: cover;
`;

export const DialogBannerName = styled(FoodLabel)`
    font-size: 30px;
    padding: 5px 40px;
    top: ${props => (props.img ? '100px' : '20px')};
`;

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
    box-shadow: 1px -2px 10px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    background-color: ${chineseYellow};
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    ${props =>
        props.disabled &&
        `
        pointer-events: none;
        opacity: 0.5;
        background-color: none;
    `}
`;

export const Disclaimer = styled.div`
    font-size: 8px;
    opacity: 0.5;
`;
