import ExperienciasDestacadas from "../components/sections/ExperienciasDestacadas";
import ComoFunciona from "../components/sections/ComoFunciona";
import "../styles/global.css";

export default function Home() {
    return (
        <>
            <main>
                <ExperienciasDestacadas />
                <ComoFunciona />
            </main>
        </>
    )
}