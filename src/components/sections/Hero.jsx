import hero from "../../assets/images/heroimg.jpg";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center min-h-[70vh] overflow-hidden">
            <img 
            src={hero} 
            alt="Hero" 
            className="w-full h-[70vh] object-cover opacity-60"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 text-[24px] text-[var(--color-text)]">
                <p> "Bienvenido al límite. Aquí no hay zona de confort, solo adrenalina, desafío y pasión por lo extremo. ¿Estás listo para vivir la aventura?"
                </p>
                <Button>Ver Experiencias</Button>
            </div>
        </section>
    )
}