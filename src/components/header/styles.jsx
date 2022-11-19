import styled from 'styled-components'

export const NavContainer = styled.div`
    height: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 60px;
    background: #2196F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
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