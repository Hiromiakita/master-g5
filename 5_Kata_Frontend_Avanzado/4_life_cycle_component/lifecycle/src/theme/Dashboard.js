import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Dashboard = () => {
    const themeMode = useContext(ThemeContext);
    return (
        <div className={themeMode}>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
