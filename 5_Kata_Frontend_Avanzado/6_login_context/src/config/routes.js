import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

//ARRAY DESDE DONDE SE RECOJEN LAS RUTAS DE LA APLICACION

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        isPrivate: true, //PROPIEDAD QUE SIRVE PARA ESTABLECER A UNA RUTA PRIVADA
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/*",
        component: NotFound,
    },
];

export default routes;
