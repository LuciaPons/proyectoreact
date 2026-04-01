import ActivityCard from "./ActivityCard";

const AdventuresList = ({ activities, variant }) => {
  const styles = {
        featured: "flex flex-row gap-2 m-6 items-center",
        all: "grid grid-cols-2 gap-8 m-10"
    };

  return (
    <div className={styles[variant] || styles.all}>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} featured/>
      ))}
    </div>
  );
};

export default AdventuresList;