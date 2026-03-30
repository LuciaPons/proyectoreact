import Button from "../../../components/ui/Button";

function ActivityCard({ activity }) {
    if (!activity) return null;

    return(
        <div>
            <img src={activity.image} alt={activity.activity} />
            <h2>{activity.activity}</h2>
            <p>{activity.location}</p>
            <p>{activity.duration}</p>
            <p>{activity.difficulty}</p>
            <p>{activity.price}</p>
            <Button>Reservar</Button>
        </div>
    )
}

export default ActivityCard;