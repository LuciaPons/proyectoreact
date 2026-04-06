import { useCart } from "../context/CartContext"
import Cart from "../components/Cart"

const CartDrawer = () => {
    const {isOpen, closeCart} = useCart();

    return (
        <>
            {isOpen && (
                <div
                onClick={closeCart}
                className="fixed insert-0 bg-black/40 z-40" 
                />
            )}
            <div
                className={`
                fixed
                top-0 right-0 
                h-full w-80
                bg-[#FAF3E6]
                shadow-xl
                z-50
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                <div className="p-4 flex justify-between items-center border-b border-b-[2px]">
                    <h2 className="font-bold text-lg">
                        Carrito
                    </h2>
                    <button
                    onClick={closeCart}
                    className="font-bold">
                        X
                    </button>
                </div>
                <div className="p-4 overflow-y-auto h-full">
                    <Cart />
                </div>
            </div>
        </>
    );
} ;

export default CartDrawer;