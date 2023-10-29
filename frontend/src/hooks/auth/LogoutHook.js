import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LogoutHook = () => {
    const { dispatch } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "SIGNOUT" });
    };

    return { logout };
};
