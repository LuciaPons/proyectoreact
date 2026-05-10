import { collection, doc, getDoc, getDocs, increment, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../services/firebase";

const activitiesCollection = collection ( db, "activities");

export const getActivities = async () => {
    const snapshot = await getDocs (activitiesCollection);

    return snapshot.docs.map (doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
        }
    });
};

export const getActivityById = async (id) => {
    const docRef = doc(db, "activities", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
        throw new Error("Actividad no encontrada");
    }
    return {
        id: snapshot.id,
        ...snapshot.data()
    };
};

export const getFeaturedActivities = async () => {
    const q = query (activitiesCollection, where ("featured", "==", true));
    const snapshot = await getDocs (q);

    return snapshot.docs.map (doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const getByCity = async (city) => {
    const q = query (activitiesCollection, where ("city", "==", city));
    const snapshot = await getDocs(q);

    return snapshot.docs.map (doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const getByLevel = async (level) => {
    const q = query (activitiesCollection, where ( "difficulty", "==", level));
    const snapshot = await getDocs(q);

    return snapshot.docs.map (doc => ({
        id: doc.id,
        ...doc.data()
    }));
};