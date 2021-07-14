import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import UseContextProvider from "../auth/UseContextProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const [user, setUser] = useState(null)
    const auth = UseContextProvider();
    return (
        <div>
            {/* <Route exact={props.exact} path={props.path} component={props.component}>

           </Route>  */}

            <Route {...rest}>
                {auth.user ? <Component /> : <Redirect to="/login" />}
            </Route>
        </div>
    );
};

export default PrivateRoute;
