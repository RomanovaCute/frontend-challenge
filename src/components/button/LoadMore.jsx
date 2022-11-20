import { useDispatch } from 'react-redux'
import { loadCats } from '../../store/reducers/action-creator'
import { LoadButton } from './styles'

export const LoadMore = () => {

    const dispatch = useDispatch()
    const handleLoad = () => {
        dispatch(loadCats())
    }

    return(
        <LoadButton onClick={handleLoad}>...загрузить новых котиков...</LoadButton>
    )
}