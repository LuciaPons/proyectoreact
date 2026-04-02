import hero from "../../assets/images/heroimg.jpg";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center h-[50vh] md:h-[70vh] overflow-hidden border border-white">
            <img 
                src={hero} 
                alt="Hero" 
                className="w-full h-[50vh] md:h-[70vh] object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-white/50"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 text-[18px] md:text-[24px] text-[var(--color-text)]">
                <p className="mb-4"> "Bienvenido al límite. Aquí no hay zona de confort, solo adrenalina, desafío y pasión por lo extremo. ¿Estás listo para vivir la aventura?"
                </p>
                <Button variant="primary">Ver Experiencias</Button>
            </div>
        </section>
    )
}