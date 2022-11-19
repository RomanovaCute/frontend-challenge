import { useDispatch, useSelector } from "react-redux"
import { Image, Item, EmptyLike, LikeContainer } from "./styles"
import emptyLike  from '../../assets/images/favEmpty.png'
import filledLike from '../../assets/images/favFilled.png'
import { chooseCat, removeCat } from '../../store/reducers/favorite-slice'


export const CatItem = ({img, cat}) => {
    const dispatch = useDispatch()
    const { favorite }  = useSelector((state) => state.favoriteSlice)
    

    const isFavorite  = favorite.some((item) => item.id === cat.id)

    const handleClick = () => {
        if(isFavorite){
            dispatch(removeCat(cat.id))
        } else {
            dispatch(chooseCat(cat))
        }
    }

    return(
        <Item>
            <Image src={img}></Image>
            <LikeContainer>
                <EmptyLike className="like" src={isFavorite ? filledLike : emptyLike} onClick={handleClick}></EmptyLike>
            </LikeContainer>
        </Item>
    )
}