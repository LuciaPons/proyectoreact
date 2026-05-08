import { useCart } from "../context/CartContext";
import { useAuth } from "../../auth/context/AuthContext";
import { createOrder } from "../../adventures/services/orders";
import CartItem  from "../components/CartItem";
import Button from "../../../components/ui/Button"


const Cart = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const { user, openAuth } = useAuth();

    const handleChekout = async () => {
        if(!user) {
            openAuth();
            return;
        }
        if (cartItems.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }
        try {
            const orderId = await createOrder(
                user.uid,
                cartItems,
                totalPrice
            );
            alert("Compra realizada con éxito!");
            await clearCart();
            console.log("Orden creada:", orderId);
        } catch (error) {
            console.error(error);
            alert("Error al procesar la compra");
        }
    };

    
    return (
        <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="
            text-base md:text-lg
            text-[var(--color-text)]
            font-bold 
            mb-4">
                Tus actividades:
            </h2>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
        ))}

            <div className="
            mt-4 
            flex flex-row 
            justify-between 
            items-center">
                <p className="
                text-base md:text-lg
                text-[var(--color-text)]
                font-bold">
                    Total: ${totalPrice}
                </p>

                <Button
                    onClick={clearCart}
                    variant="primary"
                    className="mt-2 mb-2 self-end"
                >
                    Vaciar carrito
                </Button>
            </div>
            <div className="
            border-t-[2px] 
            m-2">
                <Button
                onClick={handleChekout}
                variant="secondary"
                className="
                self-center
                m-4">
                    Finalizar compra
                </Button>
            </div>
        </div>
    );
};

export default Cart;