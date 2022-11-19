import styled from 'styled-components'

export const NavContainer = styled.div`
    position: sticky;
    top: 0;
    height: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 60px;
    background: #2196F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
    z-index: 1;

    @media (max-width: 768px) {
        width: 100vw;
        font-size: 10px;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`
export const Tabs = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .active{
        display: flex;
        align-items: center;
        height: 100%;
        background: #1E88E5;
    }

    .item{
        display: flex;
        justify-content: center;
        width: 170px;
        font-size: 14px;
        color: white;
        font-family: 'Roboto';
    }
`