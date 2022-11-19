import styled from 'styled-components'

export const Item = styled.div`
    overflow: hidden;
    position: relative;
    transition: 0.15s ease-in;
    width: 225px;
    height: 225px;

    &:hover{
        scale: 1.07;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        .like{
           opacity: 1;
           cursor: pointer;
        }
    }
`

export const Image = styled.img`
    width: 225px;
    height: 225px;
`

export const EmptyLike = styled.img`
    position: absolute;
    top: 170px;
    left: 170px;
    opacity: 0;
    transition: 0.15s ease-in;
    cursor: pointer;
`