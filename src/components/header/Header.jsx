import { NavLink } from 'react-router-dom';
import { NavContainer, Tabs } from './styles';

export const Nav = () => {
    return(
        <NavContainer>
            <Tabs>
                <NavLink to='/' className='item'>Все котики</NavLink>
                <NavLink to='/favorite' className='item'>Любимые котики</NavLink>
            </Tabs>
        </NavContainer>
    )
}