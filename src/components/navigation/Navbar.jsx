import '../../styles/navbar.css';
import logo from '../../assets/images/logoZonaLimite.png';
import avatar from '../../assets/icons/usuario.png';
import { NavLink, Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar-left'>
                <NavLink to="/">
                    <img src={logo} alt="Logo" className='navbar-logo-img' />
                </NavLink>
            </div>
            <nav className='navbar-center'>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/experiences">Experiencias</NavLink>
            </nav>
            <div className='navbar-right'>
                <Link to="/profile">
                    <img src={avatar} alt="Avatar" className='navbar-avatar' />
                </Link>
            </div>
        </header>
    )
}