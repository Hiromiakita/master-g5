import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../context";

// COMPONENTE DE ORDEN SUPERIOR PARA RECIBIR MEDIANTE PROPS A LAS RUTAS DESDE EL APP.JS Y DEDICIR SI ESTAN PROTEGIDAS (PRIVADAS) O NO (PUBLICAS)

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    //EN ESTOS PROPS VIENE EL COMPINENTE A REDERIZAR JUNTO EL RESTO DE SUS PROPIEDADES (PATH, ISPRIVATE, EXACT Y TODAS LAS QUE QUERAMOS)
    const userDetails = useAuthState(); // LLAMAMOS MEDIANTE USEAUTHSTATE AL CONTEXTO PARA SABER EN QUE ESTADO SE ENCUENTRA EL USUARIO
    return (
        <Route
            path={path}
            render={(props) =>
                isPrivate && !Boolean(userDetails.token) ? ( //SI LA RUTA ES PRIVADA Y EL USUARIO NO TIENE AUTENTICACION, REDIRIJE HACIA EL LOGIN, SINO MUESTRA EL COMPONENTE PRIVADO
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    );
};

export default AppRoutes;
