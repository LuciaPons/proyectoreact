import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../services/firebase";

const activitiesCollection = collection(db, "activities");

const mapDocs = (snapshot) =>
  snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

export const getActivities = async () => {
  try {
    const snapshot = await getDocs(activitiesCollection);
    return mapDocs(snapshot);
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener actividades");
  }
};

export const getActivityById = async (id) => {
  try {
    const docRef = doc(db, "activities", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      throw new Error("Actividad no encontrada");
    }
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener actividad");
  }
};

export const getFeaturedActivities = async () => {
  try {
    const q = query(activitiesCollection, where("featured", "==", true));
    const snapshot = await getDocs(q);

    return mapDocs(snapshot);
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener actividades");
  }
};

export const getByCity = async (city) => {
  try {
    const q = query(activitiesCollection, where("city", "==", city));
    const snapshot = await getDocs(q);

    return mapDocs(snapshot);
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener actividades");
  }
};

export const getByLevel = async (level) => {
  try {
    const q = query(activitiesCollection, where("difficulty", "==", level));
    const snapshot = await getDocs(q);

    return mapDocs(snapshot);
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener actividades");
  }
};
