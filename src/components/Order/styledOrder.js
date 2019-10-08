import styled, { css } from 'styled-components';
import { DialogContent, ConfirmButton } from '../FoodDialog/styledDialog';

export const OrderButton = styled(ConfirmButton)`
    ${props =>
        props.disabled &&
        css`
            pointer-events: none;
            opacity: 0.5;
        `}
`;

export const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: #eee;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
    display: flex;
    flex-direction: column;
`;

export const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

export const OrderContainer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid grey;
    ${props =>
        props.editable
            ? `
        &:hover {
            cursor: pointer;
            background-color: #e7e7e7;
        }
    `
            : `
        pointer-events: none;
    `}
`;

export const OrderItem = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;

export const DetailItem = styled.div`
    color: grey;
    font-size: 10px;
    padding-left: 37px;
`;
