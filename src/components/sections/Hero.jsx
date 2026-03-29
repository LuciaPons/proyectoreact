import "../../styles/hero.css";
import hero from "../../assets/images/heroimg.jpg";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} alt="Hero" className="hero-img"/>
            <div className="hero-text">
                <p> "Bienvenido al límite. Aquí no hay zona de confort, solo adrenalina, desafío y pasión por lo extremo. ¿Estás listo para vivir la aventura?"
                </p>
                <Button>Ver Experiencias</Button>
            </div>
        </section>
    )
}