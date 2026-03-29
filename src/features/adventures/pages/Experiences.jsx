import Navbar from "../components/Navbar";

export default function Experiences() {
    return (
        <>
            <Navbar />
            <h1 style={{ fontSize: "3rem", color: "var(--color-text)" }}>
                Experiencias
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-text-soft)", margin: "20px 0" }}>
                Aquí puedes encontrar todas las experiencias disponibles
            </p>
        </>
    )
}