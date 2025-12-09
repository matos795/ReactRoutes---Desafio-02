import './styles.css'
import homeImg from '../../assets/home.svg'

export default function Header() {
    return(
        <header className='drt-mb20'>
            <nav className='drt-container drt-nav-items'>
                <div className='drt-nav-items-left'>
                    <div className='drt-menu-item'>Início</div>
                    <div className='drt-menu-item'>Produtos</div>
                    <div className='drt-menu-item'>Sobre nós</div>
                </div>
                <div className='drt-nav-items-right'>
                        <img src={homeImg} alt="home" />
                </div>
            </nav>
        </header>
    );
}