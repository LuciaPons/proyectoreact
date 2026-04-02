import footer from "../../assets/images/Footer.jpg";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

/* export default function Footer() {
    return (
        <footer>
            <div>
                <img 
                src={footer} 
                alt="Footer" 
                className="w-full h-[60vh] object-cover opacity-60"/>
            </div>
            <section className="flex flex-row justify-between items-center p-4">
                <div className="flex flex-row m-2 gap-4">
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={twitter} alt="Twitter" />
                </div>
                <p>© 2023 Zona Límite. Todos los derechos reservados.</p>
            </section>
        </footer>
    )
} */

export default function Footer() {
    return (
        <footer className="relative mt-16 border border-white">
            <img 
                src={footer} 
                alt="Footer" 
                className="w-full h-[60vh] object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-white/50" />
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 text-gray-600 max-w-7xl mx-auto">
                <div>
                    <h2 className="text-2xl font-semibold mb-2 lg:text-left md:text-center sm:text-center">
                        Zona Límite
                    </h2>
                    <p className="text-[15px] text-gray-600 lg:text-left md:text-center sm:text-center">
                        Viví experiencias únicas llenas de adrenalina, desafío y aventura.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-5">
                        <img 
                            src={facebook} 
                            alt="Facebook" 
                            className="h-6 hover:opacity-70 cursor-pointer transition"/>
                        <img 
                            src={instagram} 
                            alt="Instagram" 
                            className="h-6 hover:opacity-70 cursor-pointer transition"/>
                        <img 
                            src={twitter} 
                            alt="Twitter" 
                            className="h-6 hover:opacity-70 cursor-pointer transition"/>
                    </div>
                    <p className="text-sm text-gray-600 text-center md:text-right">
                        © 2026 Zona Límite. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}