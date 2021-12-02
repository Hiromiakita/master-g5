import React from "react";
import { ThemeContext } from "./Context";
const ParentComponent = () => {
    <ThemeContext.Provider value="dark-mode">
        <Dashboard />
        <Login />
        <About />
    </ThemeContext.Provider>;
};

export default ParentComponent;
