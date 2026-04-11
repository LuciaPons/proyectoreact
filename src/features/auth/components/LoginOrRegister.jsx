import Register from "./Register";
import Login from "./Login";
import Button from "../../../components/ui/Button";
import { useAuth } from "../context/AuthContext";


const LoginOrRegister = () => {
    const {mode, setMode} = useAuth();

    return(
        <div>
            {mode === "login" ? <Login/> : <Register/>}
            <div>
                {mode === "login" ? (
                    <div className="
                    flex flex-col
                    items-center
                    mt-4
                    pt-3
                    gap-3
                    border-t-[2px]">
                        <p>
                            No estas registrado?{" "}
                        </p>
                        <Button
                            onClick={() => setMode("register")}
                            variant="primary">
                                Registrate
                        </Button>
                    </div>
                ) : (
                    <div className="
                    flex flex-col 
                    items-center 
                    mt-4 
                    pt-3 
                    gap-3
                    border-t-[2px] ">
                        <p>
                            Ya tienes cuenta?
                        </p>
                        <Button
                            onClick={() => setMode("login")}
                            variant= "secondary">
                                Iniciar sesión
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginOrRegister