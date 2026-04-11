import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
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

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError ("Debes completar todos los campos!");
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );
            const user = userCredential.user;
            login({
                uid: user.uid,
                email: user.email
            });
            setError ("");
        }catch (err) {
            setError("Email o contraseña incorrectos")
        }
        
        
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
            onClick={handleSubmitLogin}
            variant="secondary">
                Iniciar sesión
            </Button>
        </form>
    )
}

export default Login;