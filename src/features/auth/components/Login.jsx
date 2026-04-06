import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../../../components/ui/Button";


const Login = () => {
    const {login} = useAuth();

    const [form, setForm] = useState({
        email: "",
        password:"",
    });

    const [error, setError] = useState("");

    const handleChangeLogin = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError ("Debes completar todos los campos!");
            return;
        };
        setError ("");
        login(form);
    };
    return (
        <form 
        onSubmit={handleSubmitLogin} 
        className="flex flex-col gap-3"
        >
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChangeLogin}
                className="border p-2 rounded-[8px]"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChangeLogin}
                className="border p-2 rounded-[8px]"
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button
            variant="secondary">
                Iniciar sesión
            </Button>
        </form>
    )
}

export default Login;