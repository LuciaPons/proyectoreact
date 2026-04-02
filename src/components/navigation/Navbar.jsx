import logo from '../../assets/images/logoZonaLimite.png';
import avatar from '../../assets/icons/usuario.png';
import { NavLink, Link } from 'react-router-dom';


export default function Navbar() {
    
    const activeClass = ({isActive}) => 
        `relative text-[18px] transition px-3 py-1 
        ${isActive 
            ? "text-[var(--color-primary)]" 
            : "text-black"}
            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-1
            after:w-full
            after:h-[2px]
            after:bg-[var(--color-primary)]
            after:scale-x-0
            after:origin-left
            after:transition-transform
            after:duration-300 
            hover:after:scale-x-100

        `;

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-1 bg-gradient-to-r from-[#faf3e6] via-[#c94e01]/40 to-[#004b57]/40 backdrop-blur border-b border-white">
            <div>
                <Link to="/">
                    <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-20 hover:opacity-80 transition border-none" />
                </Link>
            </div>
            <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                <NavLink 
                to="/"
                className={activeClass}
                >
                    Inicio
                </NavLink>

                <NavLink 
                to="/experiences"
                className={activeClass}
                >
                    Experiencias
                </NavLink>
            </nav>
            
            <div className="flex items-center">
                <Link to="/profile">
                    <img 
                    src={avatar} 
                    alt="Avatar" 
                    className="h-10 cursor-pointer hover:opacity-80 transition" />
                </Link>
            </div>
        </header>
    )
}