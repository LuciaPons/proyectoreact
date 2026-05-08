import hero from "../../assets/images/heroimg.jpg";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="
        relative 
        flex flex-col items-center 
        h-[40vh] md:h-[60vh] lg:[80vh] 
        overflow-hidden 
        border border-white
        shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
            <img 
                src={hero} 
                alt="Hero" 
                className="
                w-full h-[40vh] md:h-[60vh] lg:[80vh] 
                object-cover 
                opacity-65"
            />
            <div className="absolute inset-0 bg-white/50"/>
            <div className="
            absolute 
            top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            text-center 
            px-4 
            text-md md:text-lg lg:text-xl 
            text-[var(--color-text)]">
                <p className="mb-4"> "Bienvenido al límite. Aquí no hay zona de confort, solo adrenalina, desafío y pasión por lo extremo. ¿Estás listo para vivir la aventura?"
                </p>
                <Button variant="primary">
                    Ver Experiencias
                </Button>
            </div>
        </section>
    )
}