import { useCart } from "../../../features/cart/context/CartContext";
import { Link } from "react-router-dom";

const ActivityDetail = ({ activity }) => {
    const { addToCart } = useCart();

    const difficultyStyles = {
        suave: "bg-emerald-700 text-emerald-950",
        media: "bg-orange-100 text-orange-600",
        extrema: "bg-red-600 text-red-950"
    }
    const availableSpots = activity.availableSpots > 0;

    const handleAddToCart = () => {
        addToCart(activity, 1)
    };

    return (
        <section className="
        bg-white
        rounded-2xl
        w-3/4 
        h-[70vh]
        mx-auto
        my-12
        overflow-hidden
        gap-8
        grid grid-cols-1 md:grid-cols-2
        justify-between
        items-center
        shadow-md
        border border-gray-200
        p-8
        ">
            <div className="
            rounded-xl
            p-6
            flex
            justify-center
            items-center
            h-3/4
            overflow-hidden">
                <img 
                src={activity.image} 
                alt={activity.name}
                className="h-full w-full object-cover rounded-xl" />
            </div>
            <div className={`space-y-4`}>
                <span className={`
                inline-block
                px-3 py-1
                text-xs
                uppercase
                tracking-wider
                rounded-full
                ${difficultyStyles[activity.difficulty]}
                `}>
                    {activity.difficulty}
                </span>
                <h2 className="text-2xl font-semibold">
                    {activity.activity}
                </h2>
                <p>Ubicaión: {activity.location}</p>
                <p>Ciudad: {activity.city}</p>
                <p>Duración: {activity.duration}</p>
                <p className="text-xl font-bold text-orange-600">
                    Precio: ${activity.price}
                </p>
                <p className={`
                ${availableSpots ? "text-green-600" : "text-red-600"}`}>
                {activity.availableSpots > 0
                ? `Cupos disponibles: ${activity.availableSpots}`
                : "No hay cupos disponibles"}
                </p>
                <p className="text-gray-500 loading-relaxed">
                    {activity.description || "Descripción de la actividad no disponible."}
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                    <button 
                    onClick={handleAddToCart} disabled={!availableSpots}
                    className={`
                        px-6 py-3
                        rounded-full
                        font-semibold
                        transition
                        ${availableSpots
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"}
                    `}
                    >
                        {availableSpots ? 
                        "Agregar al carrito" 
                        : "Sin cupos disponibles"
                        }
                    </button>
                    <Link 
                    to="/experiences"
                    className="text-orange-600 font-semibold hover:underline">
                        Ver todas las experiencias
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ActivityDetail;