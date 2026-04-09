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
                className="fixed inset-0 bg-black/40 z-40"
                />
            )}
            <div className={`
                fixed
                top-0 left-0
                h-full w-80
                bg-[#FAF3E6]
                shadow-xl
                z-50
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}>
                <div className="p-4 flex justify-between items-center border-b border-b-[2px]">
                    <h2 className="font-bold text-lg"
                    >
                        {title}
                    </h2>
                    <button
                    onClick={closeAuth}
                    className="font-bold">
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