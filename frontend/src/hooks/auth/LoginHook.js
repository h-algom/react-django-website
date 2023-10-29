import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginHook = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const { dispatch } = useContext(AuthContext);

    const signin = async (email, password) => {
        const BACKEND_URL = process.env.BACKEND_URL + 'auth/login';

        setLoading(true);
        setError(null);

        const response = await fetch(BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            dispatch({ type: "SIGNIN", payload: json });
            setLoading(false);
        }
    };

    return { signin, loading, error };
};
