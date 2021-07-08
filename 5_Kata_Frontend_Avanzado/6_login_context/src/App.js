import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./config/routes";

function App() {
    const adder = (total, number) => {
        return total + number;
    };

    let numbers = [1, 2, 3];
    let sum = numbers.reduce(adder, 0);
    console.log(sum);

    return (
        <Router>
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route
                            exact
                            path={route.path}
                            component={route.component}
                            key={route.path}
                        />
                    );
                })}
            </Switch>
        </Router>
    );
}

export default App;
