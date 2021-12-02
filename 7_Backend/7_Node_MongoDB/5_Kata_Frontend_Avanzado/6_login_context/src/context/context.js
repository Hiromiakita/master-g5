import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

//CREAMOS LOS OBJETOS DE CONTEXTO

const AuthStateContext = createContext(); //CONTIENE EL TOKEN DE AUTENTICACION Y LOS DETALLES DEL USUARIO
const AuthDispatchContext = createContext(); // SIRVE PARA PASAR EL METODO DE ENVIO QUE NOS DA EL USE REDUCER PARA ADMINISTRAR EL ESTADO AL O LOS COMPONNETES QUE LO NECESITAN

// CREAMOS LOS HOOKS PERSONALIZADOS (USEAUTHCONTEXT, USEAUTHDISPATCH) Y TAMBIEN LANZA ALGUN ERROR EN CASO DE QUE ESTOS SE QUIERAN USAR FUERA DE LOS PROVEEDORES DE CONETXTO
export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return context;
}

// CREAMOS UN PROVEEDOR PERSONALIZADO LLAMADO AUTHPROVIDER, QUE PROVEE DEL CONTEXTO A LA APLICACION.
//ESTA FUNCION ES NUESTRA ADMINISTRACION DEL ESTADO USANDO USE REDUCER. DEVUELVE UN OBJETO DE ESTADO Y UN METODO DE ENVIO PARA LOS CAMBIOS DE ESTADO
//PASAMOS EL AUTHSTATECONTEXT Y EL AUTHDISPATCHCONTEXT PARA QUE LOS HIJOS DEL AUTHPROVIDER TENGAN ACCESO AL OBJETO DE USUARIO Y EL METODO DE ENVIO

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};
