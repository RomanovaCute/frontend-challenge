import { useDispatch, useSelector } from 'react-redux'
import { CatItem } from '../../item/CatItem'
import { useEffect } from 'react'
import { loadCats } from '../../../store/reducers/action-creator'
import { Preloder } from '../../progress/Loader'

export const Homepage = () => {
    const { cats, isLoading } = useSelector((state) => state.catsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(loadCats())
	}, [])

    return(
        <>
            { isLoading &&
                <Preloder />
            }
            { !isLoading &&
                <>
                    { cats.map((item) => (
                        <CatItem cat={item} key={item.id} img={item.url}/>
                    ))}
                </>
            }
        </>
    )
}