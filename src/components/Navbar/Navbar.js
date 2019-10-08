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
    display: flex;
    align-content: center;
    justify-content: space-between;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 30px;
`;

const ButtonContainer = styled.div`
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    background-color: #8e8f7f;
    &:hover {
        opacity: 0.7;
    }
`;

const Navbar = props => {
    const { login, user, loading, logout } = props;
    return (
        <NavbarStyled>
            <Logo>
                Turramurra DumplingHouse{' '}
                <span role="img" aria-label="lantern">
                    🏮{' '}
                </span>
            </Logo>
            <UserStatus>
                {loading ? (
                    'Loading...'
                ) : (
                    <ButtonContainer>
                        <span role="img" aria-label="person">
                            👤
                        </span>{' '}
                        {user ? (
                            <span onClick={logout}>Log out</span>
                        ) : (
                            <span onClick={login}>Login / Sign up</span>
                        )}
                    </ButtonContainer>
                )}
            </UserStatus>
        </NavbarStyled>
    );
};

export default Navbar;
