import logo from '../../assets/images/logoZonaLimite.png';
import avatar from '../../assets/icons/usuario.png';
import { NavLink, Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-1 bg-gradient-to-r from-[#faf3e6] via-[#c94e0146] to-[#004b574a] border-b border-gray-300">
            <div>
                <NavLink to="/">
                    <img 
                    src={logo} alt="Logo" className="h-20 hover:opacity-80 transition" />
                </NavLink>
            </div>
            <nav className="flex gap-8">
                <NavLink 
                to="/"
                className="text-[18px] text-[var(--color-text)] hover:text-[var(--color-text)]"
                >
                    Inicio
                </NavLink>

                <NavLink 
                to="/experiences"
                className="text-[18px] text-[var(--color-text)] hover:text-[var(--color-text)]"
                >
                    Experiencias
                </NavLink>
            </nav>
            
            <div className="flex items-center">
                <Link to="/profile">
                    <img 
                    src={avatar} alt="Avatar" className="h-10 cursor-pointer hover:opacity-80 transition" />
                </Link>
            </div>
        </header>
    )
}