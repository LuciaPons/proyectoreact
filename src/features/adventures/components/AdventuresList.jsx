import ActivityCard from "./ActivityCard";

const AdventuresList = ({ activities }) => {
  return (
    <div className="item-grid">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default AdventuresList;