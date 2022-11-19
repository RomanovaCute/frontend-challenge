import { useDispatch, useSelector } from 'react-redux'
import { CatItem } from '../../item/CatItem'
import { useEffect } from 'react'
import { loadCats } from '../../../store/reducers/action-creator'

export const Homepage = () => {
    const { cats } = useSelector(state => state.catsSlice)
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(loadCats())
	}, [])

    return(
        <>
            { cats.map((item) => (
                <CatItem cat={item} key={item.id} img={item.url}/>
            ))
            }
        </>
    )
}