import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen((prev) => (!prev));

    const addToCart = (product, quantity = 1) => {
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
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
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