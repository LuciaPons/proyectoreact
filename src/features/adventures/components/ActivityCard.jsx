import Button from "../../../components/ui/Button";

function ActivityCard({ activity }) {
    if (!activity) return null;

    return(
        <div className="card">
            <div className="relative h-48 m-4 rounded-lg overflow-hidden">
                <img 
                src={activity.image} 
                alt={activity.activity} 
                className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-[var(--color-text)] text-center">
                    {activity.activity}
                </h3>
                <p className="text-[16px] text-[var(--color-text-soft)]">
                    Ubicación: {activity.location}
                </p>

                <div className="flex justify-between text-[16px] text-[var(--color-text-soft)]">
                    <span>
                        Duración: {activity.duration}
                    </span>
                    <span>
                        Dificultad: {activity.difficulty}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center p-4">
                <span className="text-lg font-bold text-orange-600">
                    Precio: ${activity.price}
                </span>
                <span className="text-[14px] text-[var(--color-text-soft)]">
                    {activity.availableSpots} cupos
                </span>
            </div>
            <span className="flex justify-center mb-4">
                <Button>Reservar</Button>
            </span>
        </div>
    );
}

export default ActivityCard;