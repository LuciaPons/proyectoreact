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
    const [purchasedItems, setPurchasedItems] = useState([]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen((prev) => (!prev));

    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            setCartItems([]);
            return;
        }
        const fetchCart = async () => {
            const data = await getCartFirebase(user.uid);
            setCartItems(data);
        };
        fetchCart();
    }, [user]);

    const addToCart = async (product, quantity = 1) => {
        if (!product || quantity <= 0) return;

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            const currentQty = existingItem ? existingItem.quantity : 0;
            const maxAvailable = product.availableSpots;

            if (currentQty + quantity > maxAvailable) {
                alert("No hay suficientes cupos disponibles");
                return prevItems;
            }

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
        console.log("User firebase:", user);
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
            await clearCartFirebase(user.uid);
            const updatedCart = await getCartFirebase(user.uid);
            setCartItems(updatedCart);
        }
    };

    const totalItems = cartItems.reduce ((acc, item) => acc + item.quantity, 0);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price *item.quantity, 0);

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                purchasedItems,
                setPurchasedItems,
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