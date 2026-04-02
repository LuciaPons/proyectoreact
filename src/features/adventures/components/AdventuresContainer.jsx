import { adventuresApi } from "../services/asyncMock";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdventuresList from "./AdventuresList";
import Button from "../../../components/ui/Button";

function AdventuresContainer() {
    const [adventures, setAdventures] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {levelId} = useParams();
    const navigate = useNavigate();

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

    if (loading) return <p className="text-center mt-10">Cargando experiencias...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    const filterClass = ({isActive}) => 
        `px-4 py-2 rounded-[8px] text-[12px] transition border shadow-lg
        ${isActive
            ? "bg-[#025159] text-white border-black"
            : "bg-white text-gray-700 border-gray-100 hover:bg-gray-100 hover:-translate-y-[2px]"
        }`;

    const handlerClearFilters = () => {
        setCity("");
        navigate("/experiences");
    }

    return (
        <main>
            <h1 className="text-[32px] text-center font-semibold text-orange-800 p-4">
                Experiencias
            </h1>
            <div className="flex flex-col md:flex-row justify-around items-center gap-6 m-10">
                <div className="flex flex-wrap gap-4 justify-center">
                    <NavLink to="/experiences" end 
                    className={filterClass}>
                        Todas
                    </NavLink>
                    <NavLink to="/experiences/suave" 
                    className={filterClass}>
                        Suave
                    </NavLink>
                    <NavLink to="/experiences/medio" 
                    className={filterClass}>
                        Medio
                    </NavLink>
                    <NavLink to="/experiences/extremo" 
                    className={filterClass}>
                        Extremo
                    </NavLink>
                </div>
                <div>
                    <select 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 rounded-[8px] border border-gray-100 bg-white shadow-lg hover:bg-gray-100 transition">
                        <option value="">Todas las ciudades</option>
                        <option value="Montevideo">Montevideo</option>
                        <option value="Maldonado">Maldonado</option>
                        <option value="Lavalleja">Lavalleja</option>
                    </select>
                </div>
                <Button 
                    onClick={handlerClearFilters}
                    variant="secondary"
                    /* className="px-4 py-2 bg-red-500 text-white rounded-[8px] hover:bg-red-600 transition" */
                >
                    Limpiar filtros
                </Button>
            </div>
            <section className="adventures-container">
                {adventures.length === 0 ? (
                    <p className="text-center mt-10">
                        No encontramos experiencias con esos filtros... 
                    </p>
                    
                ) : (
                    <AdventuresList 
                    activities={adventures}
                    variant="all" />
                )
                }
                
            </section>
        </main>
        
    );
}

export default AdventuresContainer;