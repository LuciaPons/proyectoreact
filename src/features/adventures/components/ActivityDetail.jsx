import { useCart } from "../../../features/cart/context/CartContext";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useState } from "react";

const ActivityDetail = ({ activity }) => {
    const { addToCart, purchasedItems } = useCart();
    const [loading, setLoading] = useState(false);

    if (!activity) return null;

    const difficultyStyles = {
        suave: "bg-emerald-100 border-2 border-emerald-200 text-emerald-700",
        media: "bg-orange-100 border-2 border-orange-200 text-orange-600",
        extrema: "bg-red-100 border-2 border-red-200 text-red-700",
    }
    
    const availableSpots = activity.availableSpots > 0;
    const purchasedQty = purchasedItems
        .filter(item => item.id === activity.id)
        .reduce((acc, item) => acc + item.quantity, 0);
    const remainingSpots = activity.availableSpots - purchasedQty;

    const handleAddToCart = async () => {
        if (loading) return;
        setLoading(true);
        await addToCart(activity, 1);
        setLoading(false);
    };

    return (
        <section className="
        bg-white
        rounded-2xl
        w-3/4 
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
                alt={activity.activity}
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
                shadow-lg
                ${difficultyStyles[activity.difficulty?.toLowerCase()]}
                `}>
                    {activity.difficulty}
                </span>
                <h2 className="text-2xl font-semibold">
                    {activity.activity}
                </h2>
                <p>Ciudad: {activity.city}</p>
                <p>Ubicación: {activity.location}</p>
                <p>Duración: {activity.duration}</p>
                <p className="text-xl font-bold text-orange-600">
                    Precio: ${activity.price}
                </p>
                <p className={`
                ${remainingSpots ? "text-green-600" : "text-red-600"}`}>
                {remainingSpots > 0
                ? `Cupos disponibles: ${remainingSpots}`
                : "No hay cupos disponibles"}
                </p>
                <p className="text-gray-500 leading-relaxed">
                    {activity.description || "Descripción de la actividad no disponible."}
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                    <Button 
                    onClick={handleAddToCart} 
                    disabled={remainingSpots <= 0}
                    variant="primary"
                    className={`
                        ${remainingSpots
                        ? "variant= primary"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"}
                    `}
                    >
                        {remainingSpots > 0
                        ? "Agregar al carrito" 
                        : "Sin cupos disponibles"
                        }
                    </Button>
                    <Link 
                    to="/experiences"
                    className="
                    text-orange-600 
                    font-semibold
                    m-3 
                    hover:underline">
                        Ver todas las experiencias
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ActivityDetail;