import { getActivityById } from "../services/adventures";
import ActivityDetail from "./ActivityDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ActivityDetailContainer() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { activityId } = useParams();

  console.log("id desde la url", activityId);

  useEffect(() => {
    setLoading(true);
    setError("");
    getActivityById(activityId)
      .then(setActivity)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [activityId]);

  if (loading)
    return <p className="text-center mt-10 text-base">Cargando detalles...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10 text-base">{error}</p>;

  return <ActivityDetail activity={activity} />;
}
