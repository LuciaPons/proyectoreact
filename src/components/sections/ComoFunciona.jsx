import "../../styles/como-funciona.css";
import calendario from "../../assets/icons/calendario1.png";
import objetivo from "../../assets/icons/objetivo2.png";
import aventura from "../../assets/icons/aventura.png";
import Button from "../ui/Button";

export default function ComoFunciona() {
    return (
        <section className="como-funciona">
            <h2>¿Queres iniciar? Sigue estos pasos! </h2>
            <div className="steps">
                <div className="step" data-step="1">
                    <p>Elegí la experiencia</p>
                    <img src={calendario} alt="Calendario" className="icon-como-funciona" />
                </div>
                <div className="step" data-step="2">
                    <p>Reserva tu lugar</p>
                    <img src={objetivo} alt="Objetivo" className="icon-como-funciona" />
                </div>
                <div className="step" data-step="3">
                    <p>Viví la aventura</p>
                    <img src={aventura} alt="Aventura" className="icon-como-funciona" />
                </div>
            </div>
            <div className="cta">
                <h3>¿Listo para tu próxima aventura?</h3>
                <Button>Crear cuenta</Button>
                <p>
                Sin registros complicados. Empezá en minutos.
                </p>
            </div>
        </section>
    );
}