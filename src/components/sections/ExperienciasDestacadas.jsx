import { useState, useEffect } from "react";
import { adventuresApi } from "../../features/adventures/services/asyncMock";
import AdventuresList from "../../features/adventures/components/AdventuresList";

function ExperienciasDestacadas() {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const res = await adventuresApi.getAll();
                const allActivities = res.flatMap((adv) => adv.activities);
                const destacadas = allActivities.filter((act) => act.featured);

                setFeatured(destacadas);
            } catch (error) {
                console.error("Error al cargar destacadas");
            } finally {
                setLoading(false);
            }
        }; fetchFeatured();
    }, []);
    if (loading) return <p>Cargando experiencias destacadas...</p>;
    return (
        <section>
            <h2>Aventuras Destacadas</h2>
            <AdventuresList activities={featured} />
        </section>
    );
}

export default ExperienciasDestacadas;