import React from "react";
import { useAuthDispatch, logout } from "../context";
function Dashboard(props) {
    const dispatch = useAuthDispatch(); // read dispatch method from context
    const handleLogout = () => {
        logout(dispatch); //call the logout action

        props.history.push("/login"); //navigate to logout page on logout
    };
    return (
        <div style={{ padding: 10 }}>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome to the dashboard</p>
        </div>
    );
}

export default Dashboard;
