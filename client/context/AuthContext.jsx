import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const login = async (email, password) => {
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const isLoggedIn = await res.json();

      if (isLoggedIn) {
        localStorage.setItem("user", true);
        setUser(true);
      } else {
        setError("Invalid email or password");
        return;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
