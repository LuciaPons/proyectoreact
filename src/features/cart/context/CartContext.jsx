import { createContext, useContext, useEffect, useState } from "react";
import { addToCartFirebase } from "../../adventures/services/cart";
import { getCartFirebase } from "../../adventures/services/cart";
import { removeFromCartFirebase } from "../../adventures/services/cart";
import { clearCartFirebase } from "../../adventures/services/cart";
import { useAuth } from "../../auth/context/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen((prev) => (!prev));

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            getCartFirebase(user.uid).then(setCartItems);
        }else {
            setCartItems([]);
        }
    }, [user]);

    const addToCart = async (product, quantity = 1) => {
        if (!product || quantity <= 0) return;

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (!existingItem) {
                return [...prevItems, { ...product, quantity }];
            }
            return prevItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        });

        if (user) {
            await addToCartFirebase(user.uid, product, quantity);
        }
    };

    const removeFromCart = async (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        if (user) {
            await removeFromCartFirebase(user.uid, id);
        }
    };

    const clearCart = async () => {
        setCartItems([]);
        if (user) {
            await clearCartFirebase(user.id);
        }
    };

    const totalItems = cartItems.reduce ((acc, item) => acc + item.quantity,0);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price *item.quantity, 
    0);

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                totalItems,
                totalPrice,
                isOpen,
                openCart,
                closeCart,
                toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};
    
export const useCart = () => useContext(CartContext); 