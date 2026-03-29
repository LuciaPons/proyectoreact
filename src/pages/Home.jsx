import Navbar from "../components/navigation/Navbar";
import Hero from "../components/sections/Hero";
import ExperienciasDestacadas from "../components/sections/ExperienciasDestacadas";
import ComoFunciona from "../components/sections/ComoFunciona";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <ExperienciasDestacadas />
                <ComoFunciona />
            </main>
        </>
    )
}