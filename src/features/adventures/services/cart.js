import {
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const addToCartFirebase = async (uid, product, quantity) => {
  try {
    if (!uid) throw new Error("Usuario no autenticado");
    const itemRef = doc(db, "users", uid, "cart", product.id);
    const snapshot = await getDoc(itemRef);

    if (snapshot.exists()) {
      await updateDoc(itemRef, {
        quantity: increment(quantity),
      });
    } else {
      await setDoc(itemRef, {
        activityId: product.id,
        activity: product.activity,
        price: product.price,
        quantity,
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error al agregar al carrito");
  }
};

export const getCartFirebase = async (uid) => {
  try {
    if (!uid) throw new Error("Usuario no autenticado");

    const cartRef = collection(db, "users", uid, "cart");
    const snapshot = await getDocs(cartRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    throw new Error("Error al cargar el carrito");
  }
};

export const removeFromCartFirebase = async (uid, id) => {
  await deleteDoc(doc(db, "users", uid, "cart", id));
};

export const clearCartFirebase = async (uid) => {
  const cartRef = collection(db, "users", uid, "cart");
  const snapshot = await getDocs(cartRef);

  const deletions = snapshot.docs.map((docItem) => deleteDoc(docItem.ref));
  await Promise.all(deletions);
};
