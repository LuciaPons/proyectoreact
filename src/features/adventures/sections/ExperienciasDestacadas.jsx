import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFeaturedActivities } from "../services/adventures";
import AdventuresList from "../components/AdventuresList";
import Button from "../../../components/ui/Button";

function ExperienciasDestacadas() {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        getFeaturedActivities()
        .then(setFeatured)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [])

    if (loading) return <p className="text-center mt-10">Cargando experiencias destacadas...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

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