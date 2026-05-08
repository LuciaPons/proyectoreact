import usuario from "../../../assets/icons/usuario.png";
import { useAuth } from "../context/AuthContext";
import Button from "../../../components/ui/Button";
import { useCart } from "../../cart/context/CartContext";

export default function Profile() {
    const {user, logout, closeAuth} = useAuth();
    const {totalItems, openCart} = useCart();

    return(
        <div className="
        flex flex-col justify-between
        bg-white
        rounded-xl
        shadow-md
        p-4
        text-[var(--color-text)]">
            <div className="
            flex flex-row 
            gap-7 
            items-center
            mb-[10px]">
                <img 
                src={usuario} 
                alt="usuario" 
                className="w-10 h-10 opacity-70"/>
                <p>
                    {user.name || user.email} 
                </p>
            </div>
            <div className="
            flex flex-row 
            justify-center md:justify-between
            items-center
            mb-4">
                <p className="mr-4">
                    Tu carrito:
                </p>
                <span>total {totalItems} productos</span>
            </div>
            <Button
                onClick={() => { 
                    openCart();
                    closeAuth();
                }}
                variant= "secondary"
                className="
                self-center
                mb-4">
                    Ver carrito    
            </Button> 
            <Button
            onClick={logout}
            variant= "primary"
            className="
            m-[8px]
            ">
                Cerrar sesión
            </Button>
        </div>
    )
}