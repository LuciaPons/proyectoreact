import ExperienciasDestacadas from "../features/adventures/sections/ExperienciasDestacadas";
import ComoFunciona from "../components/sections/ComoFunciona";
import "../styles/global.css";
import { uploadActivities } from "../features/adventures/services/uploadData";

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