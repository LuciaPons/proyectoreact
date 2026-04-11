import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../services/firebase";
import Button from "../../../components/ui/Button";


const Register = () => {
    const {login} = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChangeRegister = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            setError ("Debes completar todos los campos!");
            return;
        }
        
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );
            const user = userCredential.user;

            await updateProfile(user, {displayName: form.name});

            login ({
                uid: user.uid,
                email: user.email,
                name: form.name
            });

            setError("");
        }catch (err) {
            console.log(err);
            setError("Error al registrarse");
        }
    };
    return (
        <form onSubmit={handleSubmitRegister} className="flex flex-col gap-3">
            <input 
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChangeRegister}
                className="border p-2 rounded-[8px]" 
            />
            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChangeRegister}
                className="border p-2 rounded" 
            />
            <input 
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChangeRegister}
                className="border p-2 rounded" 
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button
            variant="primary">
                Crear cuenta
            </Button>
        </form>
    );
};

export default Register;