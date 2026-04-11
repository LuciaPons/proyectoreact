import { collection, getDocs, addDoc, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { deleteDoc } from "firebase/firestore";

export const addToCartFirebase = async (uid, product, quantity) => {
    const cartRef = collection(db, "users", uid, "cart");
    const q = query(cartRef, where("activityId", "==", product.id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        const existingDoc = snapshot.docs[0];
        const currentQty = existingDoc.data().quantity;

        await updateDoc(doc(db, "users", uid, "cart", existingDoc.id), {
            quantity: currentQty + quantity
        });
    }else {
        await addDoc(cartRef, {
            ...product,
            quantity
        });
    }
};

export const getCartFirebase = async (uid) => {
    const cartRef = collection(db, "users", uid, "cart");
    const snapshot = await getDocs(cartRef);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const removeFromCartFirebase = async (uid, activityId) => {
    const cartRef = collection(db, "users", uid, "cart");
    const q = query(cartRef, where("activityId", "==", activityId));
    const snapshot = await getDocs(q);

    snapshot.forEach(async(docItem) => {
        await deleteDoc(docItem.ref);
    });
};

export const clearCartFirebase = async (uid) => {
    const cartRef = collection(db, "users", uid, "cart");
    const snapshot = await getDocs(cartRef);

    snapshot.forEach(async(docItem) => {
        await deleteDoc(docItem.ref);
    });
};