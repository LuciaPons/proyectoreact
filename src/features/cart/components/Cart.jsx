import { useCart } from "../context/CartContext";
import CartItem  from "../components/CartItem";
import Button from "../../../components/ui/Button"


const Cart = () => {
    const { cartItems, totalPrice, clearCart } = useCart();

    if (cartItems.length === 0) {
        return <p className="text-[var(--color-text-soft)]">Tu carrito está vacío.</p>
    }
    return (
        <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-[17px] font-bold mb-4">
                Tus actividades:
            </h2>

            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
        ))}

            <div className="mt-4">
                <p className="font-bold">
                    Total: ${totalPrice}
                </p>

                <Button
                    onClick={clearCart}
                    variant="primary"
                    className="mt-2 "
                >
                    Vaciar carrito
                </Button>
            </div>
        </div>
    );
};

export default Cart;