import { createContext } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    getAccessTokem: () => {},

})