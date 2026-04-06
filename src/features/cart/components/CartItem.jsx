import { useCart } from "../context/CartContext"


const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <p>
                    {item.activity}
                </p>
                <p>
                    Cantidad: {item.quantity}
                </p>
            </div>

            <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
            >
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;