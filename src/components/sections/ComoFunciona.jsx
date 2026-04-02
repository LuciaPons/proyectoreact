import { Link } from "react-router-dom";
import calendario from "../../assets/icons/calendario1.png";
import objetivo from "../../assets/icons/objetivo2.png";
import aventura from "../../assets/icons/aventura.png";
import Button from "../ui/Button";

export default function ComoFunciona() {
    return (
        <section 
        className="
        w-[95%]
        h-auto
        flex flex-col items-center
        m-8
        bg-gradient-to-b from-[#faf3e6] to-[#ffffff80]
        rounded-[8px]">
            <h2 
            className="
            text-[26px] 
            m-8 
            text-center 
            text-[var(--color-text-soft)]">
                ¿Queres iniciar? Sigue estos pasos! 
            </h2>
            <div 
            className="flex flex-col md:flex-row 
            justify-center 
            flex-wrap 
            gap-6 
            mt-6 
            w-[95%]">
                <Link 
                to="/experiences"
                className="
                relative
                bg-[var(--color-card-bg)]
                p-6
                rounded-lg
                w-1/4
                shadow-md
                hover:shadow-lg
                transition
                flex flex-col md:flex-row items-center text-center gap-3
                " >
                    <span 
                    className="
                    absolute -top-4 left-4 
                    w-9 h-9
                    rounded-full
                    bg-[#bf4904c5]
                    text-white 
                    font-bold
                    flex items-center justify-center
                    shadow-lg
                    ">
                        1
                    </span>
                    <img 
                    src={calendario} 
                    alt="Calendario" 
                    className="w-14 h-14" />
                    <p>Elegí la experiencia</p>
                </Link>
                <Link 
                to="/experiences"
                className="
                relative 
                bg-[var(--color-card-bg)] 
                p-6 
                rounded-lg 
                w-1/4 
                shadow-md 
                hover:shadow-lg 
                transition 
                flex flex-col md:flex-row items-center 
                text-center 
                gap-3">
                    <span 
                    className="
                    absolute -top-4 left-4 
                    w-9 
                    h-9 
                    rounded-full 
                    bg-[#bf4904c5] 
                    text-white 
                    font-bold 
                    flex items-center justify-center
                    shadow-lg">
                        2
                    </span>
                    <img 
                    src={objetivo} 
                    alt="Objetivo" 
                    className="w-14 h-14" />
                    <p>Reserva tu lugar</p>
                </Link>
                <Link 
                to="/experiences"
                className="
                relative 
                bg-[var(--color-card-bg)] 
                p-6 
                rounded-lg 
                w-1/4
                shadow-md 
                hover:shadow-lg 
                transition 
                flex flex-col md:flex-row items-center 
                text-center 
                gap-3">
                    <span 
                    className="
                    absolute -top-4 left-4 
                    w-9 
                    h-9 
                    rounded-full 
                    bg-[#bf4904c5] 
                    text-white 
                    font-bold 
                    flex items-center 
                    justify-center
                    shadow-lg">
                        3
                    </span>
                    <img 
                    src={aventura} 
                    alt="Aventura" 
                    className="w-14 h-14" />
                    <p>Viví la aventura</p>
                </Link>
            </div>
            <div className="flex flex-col items-center gap-4 mt-10 mb-8">
                <h3 className="text-[20px] text-center text-[var(--color-text-soft)]">
                    ¿Listo para tu próxima aventura?
                </h3>
                <Button
                variant="primary"
                onClick={() => {}}
                >
                    Crear cuenta
                </Button>
                <p className="text-[16px] text-center text-[var(--color-text-soft)]">
                    Sin registros complicados. Empezá en minutos.
                </p>
            </div>
        </section> 
        
        
    );
}