import { getActivities, getByCity, getByLevel } from "../services/adventures";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdventuresList from "./AdventuresList";
import Button from "../../../components/ui/Button";

function AdventuresContainer() {
    const [activities, setActivities] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const {levelId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        
        getActivities()
            .then((data) => {
                let filtered = data;

                if (levelId) {
                    filtered = filtered.filter(
                        item => item.difficulty?.toLowerCase().trim() === levelId.toLowerCase()
                    );
                }

                if (city) {
                    filtered = filtered.filter(
                        item => item.city === city
                    );
                }
                setActivities(filtered)
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
            
    },[levelId, city]);

    if (loading) return <p className="text-center mt-10">Cargando experiencias...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    const filterClass = ({isActive}) => 
        `px-4 py-2 rounded-lg text-xs transition-all duration-300 border shadow-lg
        ${isActive
            ? "bg-[#025159]/80 text-white border-[#025159] shadow-xl -translate-y-1"
            : "bg-white/70 text-[var(--color-text-soft)] font-semibold border-gray-100 hover:bg-[#025159]/20 hover:-translate-y-1"
        }`;

    const handlerClearFilters = () => {
        setCity("");
        navigate("/experiences");
    }

    return (
        <main>
            <h1 className="
            text-xl md:text-3xl lg:text-4xl
            text-center 
            font-semibold 
            text-orange-800 p-4">
                Experiencias
            </h1>
            <div className="
            flex 
            flex-col lg:flex-row 
            justify-around items-center 
            gap-4 m-10">
                <div className="
                flex flex-wrap 
                gap-2
                justify-center items-center">
                    <p className="
                    text-[var(--color-text-soft)]
                    text-sm">Filtros</p>
                    <NavLink to="/experiences" end 
                    className={filterClass}>
                        Todas
                    </NavLink>
                    <NavLink to="/experiences/level/suave" 
                    className={filterClass}>
                        Suave
                    </NavLink>
                    <NavLink to="/experiences/level/media" 
                    className={filterClass}>
                        Media
                    </NavLink>
                    <NavLink to="/experiences/level/extrema" 
                    className={filterClass}>
                        Extrema
                    </NavLink>
                </div>
                <div>
                    <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    className="
                    px-4 py-2 
                    rounded-lg 
                    border border-gray-100 
                    bg-white/70 
                    shadow-lg 
                    text-[var(--color-text-soft)] text-xs 
                    font-semibold
                    hover:bg-bg-[#025939]/20
                    transition-all duration-300">
                        <option value="">Todas las ciudades</option>
                        <option value="Montevideo">Montevideo</option>
                        <option value="Maldonado">Maldonado</option>
                        <option value="Lavalleja">Lavalleja</option>
                    </select>
                </div>
                <Button 
                    onClick={handlerClearFilters}
                    variant="secondary"
                >
                    Limpiar filtros
                </Button>
            </div>
            <section className="adventures-container">
                {activities.length === 0 ? (
                    <p className="text-center mt-10">
                        No encontramos experiencias con esos filtros... 
                    </p>
                    
                ) : (
                    <AdventuresList 
                    activities={activities}
                    variant="all" />
                )
                }
                
            </section>
        </main>
        
    );
}

export default AdventuresContainer;