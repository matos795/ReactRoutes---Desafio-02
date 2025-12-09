import { NavLink } from 'react-router-dom';
import './styles.css'

export default function Filter() {
    return(
        <div className='drt-container drt-filter drt-mb20'>
            <div className='drt-filter-items'>
                <NavLink 
                className={({isActive}) => isActive ? 'drt-active' : ''}
                to='computers'>
                    <div className='drt-filter-item'>Computadores</div>
                </NavLink>
                <NavLink 
                className={({isActive}) => isActive ? 'drt-active' : ''}
                to='electronics'>
                    <div className='drt-filter-item'>Eletrônicos</div>
                </NavLink>
                <NavLink 
                className={({isActive}) => isActive ? 'drt-active' : ''}
                to='books'>
                    <div className='drt-filter-item'>Livros</div>
                </NavLink>
            </div>
        </div>
    );
}