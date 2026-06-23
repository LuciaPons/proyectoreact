import { Link } from "react-router-dom";
import seleccion from "../../assets/icons/seleccion.png";
import registro from "../../assets/icons/registro.png";
import aventura from "../../assets/icons/aventura.png";
import Button from "../ui/Button";
import { useAuth } from "../../features/adventures/hooks/useAuth";
import { useCart } from "../../features/adventures/hooks/useCart";

export default function ComoFunciona() {
  const { openAuth } = useAuth();
  const { openCart } = useCart();

  return (
    <section
      className="
        w-[90vw]
        h-auto 
        mx-auto my-8 
        px-4 md:px-6
        flex flex-col items-center
        bg-gradient-to-b from-[#faf3e6] to-[#ffffff80]
        rounded-lg"
    >
      <h2
        className="
            text-xl md:text-2xl 
            m-8 
            text-center 
            text-[var(--color-text)]"
      >
        ¿Queres iniciar? Sigue estos pasos!
      </h2>
      <div
        className="
            flex flex-col sm:flex-col md:flex-col lg:flex-row 
            items-center
            justify-center  
            gap-8 
            mt-6 
            w-full 
            "
      >
        <Link
          to="/experiences"
          className="
                relative
                w-full sm:w-[80%] md:w-[80%] lg:w-[30%]
                h-full min-h-[20vh]
                bg-[var(--color-card-bg)]
                p-6
                flex flex-row lg:flex-col
                items-center justify-center 
                text-center 
                gap-3
                rounded-lg
                shadow-md
                group
                hover:shadow-lg
                hover:-translate-y-2
                transition-all duration-300
                "
        >
          <span
            className="
                    absolute -left-6 
                    w-12 h-12
                    rounded-full
                    bg-[#bf4904c5]/70
                    text-white 
                    font-bold
                    flex items-center justify-center
                    shadow-lg
                    group-hover:shadow-[0_0_15px_rgba(191,73,4,0.8)]
                    group-hover:scale-110
                    "
          >
            1
          </span>
          <img
            src={seleccion}
            alt="Seleccion"
            className="
                    sm:w-12 w-14 
                    sm:h-12 h-14"
          />
          <p
            className="
                    text-[var(--color-text-soft)]"
          >
            Elegí la experiencia que más se adapte a tí
          </p>
        </Link>
        <button
          onClick={openAuth}
          className="
                relative
                w-full sm:w-[80%] md:w-[80%] lg:w-[30%]
                h-full min-h-[20vh]
                bg-[var(--color-card-bg)]
                p-6
                flex flex-row lg:flex-col
                items-center justify-center 
                text-center 
                gap-3
                rounded-lg
                shadow-md
                group
                hover:shadow-lg
                hover:-translate-y-2
                transition-all duration-300"
        >
          <span
            className="
                    absolute -left-6 
                    w-12 h-12
                    rounded-full
                    bg-[#bf4904c5]/70
                    text-white 
                    font-bold
                    flex items-center justify-center
                    shadow-lg
                    group-hover:shadow-[0_0_15px_rgba(191,73,4,0.8)]
                    group-hover:scale-110"
          >
            2
          </span>
          <img
            src={registro}
            alt="Registro"
            className="
                    sm:w-12 w-14 
                    sm:h-12 h-14"
          />
          <p
            className="
                    text-[var(--color-text-soft)]"
          >
            Registrate
          </p>
        </button>
        <button
          onClick={openCart}
          className="
                relative
                w-full sm:w-[80%] md:w-[80%] lg:w-[30%]
                h-full min-h-[20vh]
                bg-[var(--color-card-bg)]
                p-6
                flex flex-row lg:flex-col
                items-center justify-center 
                text-center 
                gap-3
                rounded-lg
                shadow-md
                group
                hover:shadow-lg
                hover:-translate-y-2
                transition-all duration-300"
        >
          <span
            className="
                    absolute -left-6 
                    w-12 h-12
                    rounded-full
                    bg-[#bf4904c5]/70
                    text-white 
                    font-bold
                    flex items-center justify-center
                    shadow-lg
                    group-hover:shadow-[0_0_15px_rgba(191,73,4,0.8)]
                    group-hover:scale-110"
          >
            3
          </span>
          <img
            src={aventura}
            alt="Aventura"
            className="
                    sm:w-12 w-14 
                    sm:h-12 h-14"
          />
          <p
            className="
                    text-[var(--color-text-soft)]"
          >
            Viví la aventura
          </p>
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 mt-10 mb-8">
        <h3
          className="
                text-xl md:text-2xl 
                text-center 
                text-[var(--color-text-soft)]"
        >
          ¿Listo para tu próxima aventura?
        </h3>
        <Button variant="primary" onClick={openAuth}>
          Crear cuenta
        </Button>
        <p
          className="
                text-base md:text-lg 
                text-center 
                text-[var(--color-text-soft)]"
        >
          Sin registros complicados. Empezá en minutos.
        </p>
      </div>
    </section>
  );
}
