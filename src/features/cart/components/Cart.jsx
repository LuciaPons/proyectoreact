import { useCart } from "../context/CartContext";
import { useAuth } from "../../auth/context/AuthContext";
import { createOrder } from "../../adventures/services/orders";
import CartItem  from "../components/CartItem";
import Button from "../../../components/ui/Button"
import { useEffect, useState } from "react";

const Cart = () => {
    const { cartItems, totalPrice, clearCart, setPurchasedItems } = useCart();
    const { user, openAuth } = useAuth();
    const [orderId, setOrderId] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(success) {
            const timer = setTimeout(() => setSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    useEffect(() => {
        if(error) {
            const timer = setTimeout(() => setError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleCheckout = async () => {
        setSuccess(false);
        setError(false);

        if(!user) {
            openAuth();
            return;
        }

        if (cartItems.length === 0) {
            return;
        }

        try {
            const orderId = await createOrder(
                user.uid,
                cartItems,
                totalPrice
            );

            setPurchasedItems((prev) => [...prev, ...cartItems]);
            await clearCart();
            setOrderId(orderId);
            setSuccess(true);
            console.log("Orden creada:", orderId);

        } catch (error) {
            console.error(error);
            setError(true);
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
                onClick={handleCheckout}
                variant="secondary"
                className="
                self-center
                m-4">
                    Finalizar compra
                </Button>
                {success && (
                    <p className="text-green-600 text-center mb-2">
                        Compra realizada con éxito! ID: {orderId}
                    </p>
                )}
                {error && (
                    <p className="text-red-500 text-center mb-2">
                        Error al procesar la compra
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cart;