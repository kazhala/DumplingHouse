import React from 'react';
import styled, { css } from 'styled-components';
import { chineseYellow } from '../../Styles/colors';
import { Title } from '../../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${chineseYellow};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    align-content: center;
    justify-content: space-between;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
    @media (max-width: 339px) {
        font-size: 15px;
    }
`;

export const UserStatus = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 30px;
    @media (max-width: 501px) {
        ${props =>
            props.navBar &&
            css`
                display: none;
            `}
    }
`;

export const ButtonContainer = styled.div`
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    background-color: #8e8f7f;
    &:hover {
        opacity: 0.7;
    }
`;

const HamburgerMenu = styled.div`
    height: 30px;
    width: 30px;
    background-image: url('https://img.icons8.com/metro/26/000000/menu.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;
    @media (min-width: 502px) {
        display: none;
    }
`;

const Navbar = props => {
    const { login, user, loading, logout } = props;

    const handleAuthClick = () => {
        if (user) {
            logout();
        } else {
            login();
        }
    };

    return (
        <NavbarStyled>
            <Logo>
                Turramurra DumplingHouse{' '}
                <span role="img" aria-label="lantern">
                    🏮{' '}
                </span>
            </Logo>
            <HamburgerMenu
                onClick={() => props.setShowSideBar(prev => !prev)}
            />
            <UserStatus navBar>
                {loading ? (
                    'Loading...'
                ) : (
                    <ButtonContainer onClick={handleAuthClick}>
                        <span role="img" aria-label="person">
                            👤
                        </span>{' '}
                        {user ? <span>Log out</span> : <span>Login</span>}
                    </ButtonContainer>
                )}
            </UserStatus>
        </NavbarStyled>
    );
};

export default Navbar;
