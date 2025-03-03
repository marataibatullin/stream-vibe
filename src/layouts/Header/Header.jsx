import Logo from '@/components/Logo';
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__inner container">
                <Logo loading="eager"/>
            </div>
        </header>
    )
}

export default Header;