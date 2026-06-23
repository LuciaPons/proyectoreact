import Register from "./Register";
import Login from "./Login";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../adventures/hooks/useAuth";

const LoginOrRegister = () => {
  const { mode, setMode } = useAuth();

  return (
    <div>
      {mode === "login" ? <Login /> : <Register />}
      <div>
        {mode === "login" ? (
          <div
            className="
                    flex flex-col
                    items-center
                    mt-4
                    pt-3
                    gap-3
                    border-t-2"
          >
            <p
              className="
                        text-[var(--color-text-soft)]
                        text-base"
            >
              No estás registrado?{" "}
            </p>
            <Button onClick={() => setMode("register")} variant="primary">
              Regístrate
            </Button>
          </div>
        ) : (
          <div
            className="
                    flex flex-col 
                    items-center 
                    mt-4 
                    pt-3 
                    gap-3
                    border-t-[2px] "
          >
            <p
              className="
                        text-[var(--color-text-soft)]"
            >
              Ya tienes cuenta?
            </p>
            <Button onClick={() => setMode("login")} variant="secondary">
              Iniciar sesión
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginOrRegister;
