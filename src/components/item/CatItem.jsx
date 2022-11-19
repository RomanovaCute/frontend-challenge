import { useDispatch, useSelector } from "react-redux"
import { Image, Item, EmptyLike } from "./styles"
import  emptyLike  from '../../assets/images/favEmpty.png'
import filledLike from '../../assets/images/favFilled.png'


export const CatItem = ({img, cat}) => {
    const dispatch = useDispatch()

    return(
        <Item>
            <Image src={img}></Image>
            <EmptyLike className="like" src={emptyLike}></EmptyLike>
        </Item>
    )
}