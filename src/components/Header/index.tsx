import './styles.css'
import homeImg from '../../assets/home.svg'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <header className='drt-mb20'>
            <nav className='drt-container drt-nav-items'>
                <div className='drt-nav-items-left'>
                    <NavLink 
                    className={({isActive}) => isActive ? 'drt-menu-item drt-active' : 'drt-menu-item'}
                    to='/home'>
                        <div className='drt-menu-item'>Início</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => isActive ? 'drt-menu-item drt-active' : 'drt-menu-item'}
                    to='/products'>
                        <div className='drt-menu-item'>Produtos</div>
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => isActive ? 'drt-menu-item drt-active' : 'drt-menu-item'}
                    to='/about'>
                        <div className='drt-menu-item'>Sobre nós</div>
                    </NavLink>
                </div>
                <div className='drt-nav-items-right'>
                    <NavLink 
                    className={({isActive}) => isActive ? 'drt-menu-item drt-active' : 'drt-menu-item'}
                    to='/home'>
                        <img src={homeImg} alt="home" />
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}