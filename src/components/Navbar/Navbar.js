import React from 'react';
import styled from 'styled-components';
import { chineseYellow } from '../../Styles/colors';
import { Title } from '../../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${chineseYellow};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
`;

const Navbar = props => {
    return (
        <NavbarStyled>
            <Logo>
                Turramurra DumplingHouse{' '}
                <span role="img" aria-label="lantern">
                    🏮{' '}
                </span>
            </Logo>
        </NavbarStyled>
    );
};

export default Navbar;
