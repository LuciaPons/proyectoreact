import CardDestacadas from "../ui/CardDestacadas";
import "../../styles/destacadas.css";
import ActivityCard from "../ui/ActivityCard";

export default function ExperienciasDestacadas() {
    return (
        <section className="section-destacadas">
            <h2>
                Experiencias Destacadas
            </h2>
            <div className="cards-container">
                <CardDestacadas/>
                <CardDestacadas/>
                <CardDestacadas/>
                <ActivityCard />
            </div>
        </section>
    )
}