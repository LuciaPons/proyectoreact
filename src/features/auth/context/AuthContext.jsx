import { createContext, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../adventures/services/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("login");

  const openAuth = () => setIsOpen(true);
  const closeAuth = () => setIsOpen(false);
  const toggleAuth = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName || "",
        });
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        isOpen,
        mode,
        setMode,
        openAuth,
        closeAuth,
        toggleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
