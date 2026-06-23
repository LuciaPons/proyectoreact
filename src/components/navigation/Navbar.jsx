import logo from "../../assets/images/logoZonaLimite.png";
import avatar from "../../assets/icons/usuario.png";
import carrito from "../../assets/icons/carrito.png";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../features/adventures/hooks/useCart";
import { useAuth } from "../../features/adventures/hooks/useAuth";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    `relative text-sm md:text-[18px] transition-all duration-300 px-3 py-1 
        ${
          isActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text-soft)]"
        }
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

  const { toggleAuth } = useAuth();
  const { toggleCart, totalItems } = useCart();

  return (
    <header
      className="
        sticky 
        top-0 z-50 
        flex justify-between items-center 
        px-10 py-1 
        bg-gradient-to-r from-[#faf3e6] via-[#c94e01]/40 to-[#004b57]/40 
        backdrop-blur 
        border-b border-white"
    >
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="
                    h-[8vh] md:h-[13vh] 
                    transition-all duration-300  
                    rounded-lg
                    hover:bg-white/10
                    hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] "
          />
        </Link>
      </div>
      <nav
        className={`
            absolute top-full left-0 
            w-full 
            bg-[#faf3e6]
            flex flex-col items-center 
            gap-1 md:gap-4 
            py-4
            transition-all duration-300
            md:static md:flex md:flex-row md:bg-transparent md:py-0 md:w-auto md:gap-8

            ${menuOpen ? "block bg-[#faf3e6]/80" : "hidden md:flex"}
            `}
      >
        <NavLink
          to="/"
          className={activeClass}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </NavLink>

        <NavLink to="/experiences" className={activeClass}>
          Experiencias
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="
                md:hidden 
                text-center
                text-xl text-[var(--color-text-soft)]
                hover:-translate-y-1
                hover:transition"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        <button onClick={toggleAuth}>
          <img
            src={avatar}
            alt="Avatar"
            className="
                    w-8 h-8 md:w-10 md:h-10 
                    transition-all duration-300 
                    cursor-pointer 
                    hover:-translate-y-1
                    hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
          />
        </button>
        <button onClick={toggleCart} className="relative">
          <img
            src={carrito}
            alt="Carrito"
            className="
                    w-8 h-8 md:w-10 md:h-10 
                    transition-all duration-300 cursor-pointer 
                    hover:-translate-y-1
                    hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
          />
          <span
            className="
                    absolute 
                    -top-2 -right-2 
                    w-6 h-6
                    text-lg
                    text-[var(--color-text)] 
                    font-bold
                    flex items-center justify-center"
          >
            {totalItems}
          </span>
        </button>
      </div>
    </header>
  );
}
