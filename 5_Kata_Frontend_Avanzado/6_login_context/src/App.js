import React, { useReducer } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import AppRoutes from "./components/AppRoutes";

function App() {
    // EJEMPLOS DE REDUCTORES

    // const initialState = { count: 0 };

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case "increment":
    //             return { count: state.count + 1 };
    //         case "decrement":
    //             return { count: state.count - 1 };
    //         default:
    //             throw new Error();
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState);
    // return (
    //     <>
    //         Count: {state.count}
    //         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    //         <button onClick={() => dispatch({ type: "increment" })}>+</button>
    //     </>
    // );

    // const adder = (total, number) => {
    //     return total + number;
    // };

    // let numbers = [1, 2, 3];
    // let sum = numbers.reduce(adder,0);
    // console.log(sum);

    return (
        // REDERIZACION DE LA APLICACION EN DONDE EL AUTHPROVIDER PROVEE DEL CONTEXTO DE ESTADO DE USUARIO A TODAS LAS RUTAS
        <AuthProvider>
            <Router>
                <Switch>
                    {routes.map((route) => (
                        <AppRoutes //COMPONENTE CREADO PARA RENDERIZAR A CADA UNA DE LAS RUTAS SEAN PUBLICAS O PRIVADAS (REEMPLAZA AL <ROUTE/> DEL ROUTER-DOM)
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                        />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
