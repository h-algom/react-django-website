import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const RegisterHook = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const { dispatch } = useContext(AuthContext);

    const signup = async (email, password) => {
        const BACKEND_URL = process.env.BACKEND_URL + "auth/register";

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
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // update the auth context
            dispatch({ type: "SIGNIN", payload: json });

            // update loading state
            setLoading(false);
        }
    };

    return { signup, loading, error };
};
