import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adventuresApi } from "../../features/adventures/services/asyncMock";
import AdventuresList from "../../features/adventures/components/AdventuresList";
import Button from "../ui/Button";

function ExperienciasDestacadas() {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
            <h2 
            className="text-[32px] text-center font-semibold text-orange-800 p-4">
                Aventuras Destacadas
            </h2>
            <div>
                <AdventuresList 
                activities={featured} 
                variant="featured"/>
            </div>
            <Button 
            onClick={() => navigate("/experiences")}
            variant="secondary"
            className="block mx-auto mt-6">
                Ver Todas las Experiencias
            </Button>
            
        </section>
    );
}

export default ExperienciasDestacadas;