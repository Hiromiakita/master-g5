import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Se esta importando este archivo desde un index
import { About } from "../pages";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";

import React from "react";

const RoutesApp = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                {/* Renderizar ruta como un children */}
                <Route exact path="/about">
                    <About />
                </Route>
                {/* Renderizar rutas mediante props */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile/:name" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Home} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default RoutesApp;
