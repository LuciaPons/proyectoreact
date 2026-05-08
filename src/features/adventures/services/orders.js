import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const createOrder = async (uid, cartItems, totalPrice) => {
    const ordersRef = collection(db, "users", uid, "orders");
    const order = {
        items: cartItems,
        total: totalPrice,
        createdAt: serverTimestamp()
    };
    const docRef = await addDoc(ordersRef, order);

    return docRef.id;
};