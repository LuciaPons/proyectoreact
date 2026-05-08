import ActivityCard from "./ActivityCard";

const AdventuresList = ({ activities, variant }) => {
  const styles = {
        featured: "flex flex-col md:flex-row gap-2 m-6 items-stretch",
        all: "grid grid-row lg:grid-cols-2 gap-8 m-10"
    };

  return (
    <div className={styles[variant] || styles.all}>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default AdventuresList;