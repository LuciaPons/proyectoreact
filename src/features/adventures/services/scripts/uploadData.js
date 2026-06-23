import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { activities } from "../data";

export const uploadActivities = async () => {
  const ref = collection(db, "activities");

  await Promise.all(activities.map((act) => setDoc(doc(ref, act.id), act)));
};
