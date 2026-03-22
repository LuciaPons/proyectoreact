import Navbar from "../components/navigation/Navbar";
import Button from "../components/ui/Button";
import Hero from "../components/sections/Hero";
import ExperienciasDestacadas from "../components/sections/ExperienciasDestacadas";


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ExperienciasDestacadas />
                <h1 style={{ fontSize: "3rem", color: "var(--color-text)" }}>
                    Bienvenido a MiApp
                </h1>
                <p style={{ fontSize: "1.2rem", color: "var(--color-text-soft)", margin: "20px 0" }}>
                    Una landing minimalista con gradiente sutil de fondo
                </p>
                <Button>Empezar</Button>
            
        </>
    )
}