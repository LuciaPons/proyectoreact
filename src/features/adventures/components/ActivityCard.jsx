import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

function ActivityCard({ activity }) {

    if (!activity) return null;
    console.log(activity);
    

    return(
        <div className="
        bg-white
        rounded-2xl
        w-full
        flex flex-col
        shadow-md
        overflow-hidden
        transition duration-300
        hover:shadow-xl
        hover:-translate-y-1">
            <div className="relative h-48 m-4 rounded-lg overflow-hidden">
                <img 
                src={activity.image} 
                alt={activity.activity} 
                className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="
                text-lg 
                font-semibold 
                text-[var(--color-text)] 
                text-center">
                    {activity.activity}
                </h3>
                <p className="
                text-sm md:text-base
                text-[var(--color-text-soft)]">
                    Ubicación: {activity.city}
                </p>

                <div className="
                flex flex-row md:flex-col lg:flex-row justify-between 
                text-sm md:text-base
                text-[var(--color-text-soft)]">
                    <span>
                        Duración: {activity.duration}
                    </span>
                    <span>
                        Dificultad: {activity.difficulty}
                    </span>
                </div>
            </div>
            <div className="
            flex flex-row md:flex-col lg:flex-row  justify-between 
            items-center p-4 ">
                <span className="
                text-base md:text-lg 
                font-bold 
                text-orange-600">
                    Precio: ${activity.price}
                </span>
                <span className="
                text-sm md:text-base 
                text-[var(--color-text-soft)]">
                    {activity.availableSpots <= 3 ? (
                        <div className="
                        flex flex-col 
                        items-end md:items-center lg:items-end
                        text-right md:text-center lg:text-right">
                            <p>{activity.availableSpots} cupos disponibles</p>
                            <p className="
                            text-[var(--color-primary)]
                            text-underline">
                                Quedan pocos cupos disponibles!
                            </p>
                        </div>
                    ): (
                        <p>{activity.availableSpots} cupos disponibles</p>
                    )}
                </span>
            </div>
            <span className="flex justify-center mt-auto mb-4">
                <Link to={`/experiences/detail/${activity.id}`}>
                    <Button 
                    variant="primary">
                        Ver detalle
                    </Button>
                </Link>
            </span>
        </div>
    );
}

export default ActivityCard;