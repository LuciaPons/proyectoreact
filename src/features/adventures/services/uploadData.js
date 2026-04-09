import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { activities } from "./data";

export const uploadActivities = async () => {
    const ref = collection (db, "activities");

    await Promise.all (
        activities.map (({id, ...act}) => addDoc (ref, act))
    );
};

