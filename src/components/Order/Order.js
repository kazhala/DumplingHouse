import React from 'react';
import styled from 'styled-components';

const OrderStyled = styled.div`
    position: fixed;
    right: 0px;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
`;

const Order = props => {
    return <OrderStyled>Your order is empty...</OrderStyled>;
};

export default Order;
