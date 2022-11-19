import styled from 'styled-components'

export const Item = styled.div`
    overflow: hidden;
    position: relative;
    transition: 0.15s ease-in;
    width: 225px;
    height: 225px;

    &:hover{
        scale: 1.07;
        

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

export const LikeContainer = styled.div`
    height: 94px;
    position: absolute;
    justify-content: flex-end;
    align-item: center;
    width: 100%;
    display: flex;
    bottom: 0;

    &:hover{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 58.85%);
    }
`

export const EmptyLike = styled.img`
    position: absolute;
    top: 0;
    padding: 28px;
    opacity: 0;
    transition: 0.15s ease-in;
    cursor: pointer;
`