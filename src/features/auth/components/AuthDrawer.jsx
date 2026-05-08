import { useAuth } from "../context/AuthContext";
import Profile from "../components/Profile";
import LoginOrRegister from "./LoginOrRegister";

const AuthDrawer = () => {
    const {isOpen, closeAuth, user, mode} = useAuth();
    
    let title = "Login";
    if (user) {
        title = "Perfil"
    } else if (mode === "register") {
        title = "Registro"
    }

    return (
        <>
            {isOpen && (
                <div 
                onClick={closeAuth}
                className="
                fixed inset-0 
                bg-black/50 backdrop-blur-sm
                z-40"
                />
            )}
            <div className={`
                fixed
                top-0 left-0
                h-full 
                bg-[#FAF3E6]
                z-50
                transition-transform duration-300 ease-in-out
                w-full md:w-80 

                ${isOpen 
                    ? "translate-x-0" 
                    : "-translate-x-full"
                }
                `}>
                <div className="
                flex justify-between 
                items-center 
                p-4 
                border-b-2">
                    <h2 className="
                    text-[var(--color-text)]
                    font-bold 
                    text-base md:text-lg"
                    >
                        {title}
                    </h2>
                    <button
                    onClick={closeAuth}
                    className="
                    text-[var(--color-text)]
                    font-bold
                    text-2xl
                    p-2
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:drop-shadow-[0_0_15px_rgba(2,81,89,0.9)]">
                        X
                    </button>
                </div>
                <div className="p-4 overflow-y-auto h-full">
                    {user ? <Profile /> : <LoginOrRegister />}
                </div>

            </div>
        </>
    )
}

export default AuthDrawer;