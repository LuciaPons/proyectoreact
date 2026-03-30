import { adventuresApi } from "../services/asyncMock";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdventuresList from "./AdventuresList";

function AdventuresContainer() {
    const [adventures, setAdventures] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {levelId} = useParams();

    useEffect(() => {
        setLoading(true);
        setError("");

        const fetchData = async () => {
            try {
                let data = [];

                if (levelId) {
                    const res = await adventuresApi.getActivityByLevel(levelId);
                    data = res?.activities || [];
                }else{
                    const res = await adventuresApi.getAll();
                    data = res.flatMap((adv) => adv.activities);
                }
                if (city) {
                    data = data.filter((act)=> act.city.toLowerCase() ===city.toLowerCase());
                }
                setAdventures(data);

            } catch (err) {
                setError("No se pudieron cargar las aventuras. Por favor, intenta nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [levelId, city]);

    if (loading) return <p>Cargando experiencias...</p>;
    if (error) return <p>{error}</p>;
    if (adventures.length === 0) return <p>No hay aventuras disponibles.</p>;

    return (
        <main>
            <h1>Experiencias</h1>
            <div className="filters">
                <div className="levels">
                    <Link to="/experiences">Todas</Link>
                    <Link to="/experiences/suave">Suave</Link>
                    <Link to="/experiences/medio">Medio</Link>
                    <Link to="/experiences/extremo">Extremo</Link>
                </div>
                <div className="city-filter">
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Todas las ciudades</option>
                        <option value="Montevideo">Montevideo</option>
                        <option value="Maldonado">Maldonado</option>
                        <option value="Lavalleja">Lavalleja</option>
                    </select>
                </div>
            </div>
            <section className="adventures-container">
                <AdventuresList activities={adventures} />
            </section>
        </main>
        
    );
}

export default AdventuresContainer;