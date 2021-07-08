import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
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
