import { useState, useEffect } from "react";
import { adventuresApi } from "../services/asyncMock";
import ActivityCard from "./ActivityCard";

export default function AdventuresList() {
    const [adventures, setAdventures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(adventures);
    

    function cargarAdventures() {
        setLoading(true);
        setError(null);
        adventuresApi
            .getAll()
            .then((data) => setAdventures(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        cargarAdventures();
    }, []);

    if (loading) return <p className="loading">Cargando aventuras...</p>;
    if (error) return <p className="error">Error: {error}</p>;//boton para recargar productos
    if(!adventures.length)return <p className="no-data">No hay aventuras disponibles</p>;

    return (
        <section className="card">
            <h3>Aventuras</h3>
            <ul>
                {adventures.map((adventure) =>
                    adventure.activities?.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))
                )}
            </ul>
        </section>
    )
}