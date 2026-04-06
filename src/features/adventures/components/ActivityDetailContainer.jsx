import { adventuresApi } from "../services/asyncMock";
import ActivityDetail from "./ActivityDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ActivityDetailContainer() {
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { activityId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError("");
        adventuresApi.getActivityById(activityId)
            .then(setActivity)
            .catch(() => setError("Actividad no encontrada."))
            .finally(() => setLoading(false));
    }, [activityId])

    if (loading) {
        return <div>Cargando detalles...</div>
    }
    if (error) {
        return <div className="text-red-500">{error}</div>
    }
    console.log("id desde la url", activityId);
    
    return <ActivityDetail activity={activity} />
}