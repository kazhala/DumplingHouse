import styled from 'styled-components';

export const Banner = styled.div`
    height: 200px;
    background-image: url('img/bannerDump.jpeg');
    background-position: left;
    background-size: 90%;
    background-repeat: no-repeat;
    filter: contrast(0.75);
    @media (max-width: 501px) {
        background-position: center;
        background-size: cover;
    }
`;
