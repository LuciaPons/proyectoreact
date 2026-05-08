import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const createOrder = async (uid, cartItems, totalPrice) => {
    const ordersRef = collection(db, "orders");
    const order = {
        uid,
        items: cartItems,
        total: totalPrice,
        cratedAt: serverTimestamp()
    };
    const docRef = await addDoc(ordersRef, order);

    return docRef.id;
};