import {
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";

export const addToCartFirebase = async (uid, product, quantity) => {
  const itemRef = doc(db, "users", uid, "cart", product.id);
  const snapshot = await getDoc(itemRef);

  if (snapshot.exists()) {
    const currentQty = snapshot.data().quantity || 0;

    await setDoc(itemRef, {
      ...product,
      quantity: currentQty + quantity,
    });
  } else {
    await setDoc(itemRef, {
      ...product,
      activityId: product.id,
      quantity,
    });
  }
  console.log("Guardando en Firebase...");
};

export const getCartFirebase = async (uid) => {
  const cartRef = collection(db, "users", uid, "cart");
  const snapshot = await getDocs(cartRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
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
