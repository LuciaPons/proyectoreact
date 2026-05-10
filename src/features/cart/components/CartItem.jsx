import { useCart } from "../context/CartContext"

const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div className="
            text-sm md:text-base
            text-[var(--color-text-soft)]">
                <p>
                    {item.activity}
                </p>
                <p className="font-semibold">
                    Cantidad: {item.quantity}
                </p>
            </div>

            <button
                onClick={() => removeFromCart(item.id)}
                className="
                text-red-500
                transition-all duration-300
                hover:drop-shadow-[0_0_20px_rgba(201,78,1,0.8)]
                hover:-translate-y-1"
            >
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;