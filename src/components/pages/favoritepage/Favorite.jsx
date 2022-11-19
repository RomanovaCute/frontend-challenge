import { CatItem } from "../../item/CatItem"
import { useSelector } from "react-redux"
import { Preloder } from "../../progress/Loader"

export const Favorite = () => {
    const { favorite, isLoading } = useSelector((state) => state.favoriteSlice)

    return(
        <>
            { isLoading &&
                <Preloder />
            }
            { !isLoading &&
                <>
                    { favorite.length === 0 && (
                        <h3>Здесь пока нет котиков! Самое время их добавить</h3>
                    )}
                    { favorite.length !== 0 && (
                        favorite.map((item) => (
                            <CatItem key={item.id} img={item.url} cat={item}/>
                        ))
                    )}
                </>
            }
        </>
    )
}