import { useDispatch, useSelector } from "react-redux"
import { Image, Item } from "./styles"

export const CatItem = ({img, cat}) => {
    const dispatch = useDispatch()

    return(
        <Item>
            <Image src={img}></Image>
        </Item>
    )
}