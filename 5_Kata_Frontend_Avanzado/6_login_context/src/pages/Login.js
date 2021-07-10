import React, { useState } from "react";
import { loginUser, useAuthState, useAuthDispatch } from "../context";

function Login(props) {
    // Estados para almacenar los datos introducidos en los input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAuthDispatch(); //Obtenemos el metodo de envio desde este hook personalizado
    const { loading, errorMessage } = useAuthState(); //Leemos los valores de carga y error desde el contexto

    // ESTA FUNCION MANEJA EL ENVIO DE LOS DATOS HACIA EL SERVIDOR
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await loginUser(dispatch, { password, email }); //La accion de login user hace la peticion mediante el metodo de envio que le dice el dispatch, envia en un objeto los datos de inicio de sesion y maneja los cambios de estado
            console.log("RESPUESTA!!", response);
            if (!response.role) return; //Verifica si existe la propiedad role del usuario
            props.history.push("/dashboard"); //Si es asi, Navegamos al dashboard
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div>
                <h1>Login Page</h1>
                <form>
                    <div>
                        <div>
                            <label htmlFor="email">Username</label>
                            <input
                                type="text"
                                id="email"
                                value={email} //asignamos el valor del estado del input
                                onChange={(e) => setEmail(e.target.value)} //Seteamos al estado lo que se escriba en el input
                                disabled={loading} //estado de carga de datos del formulario. Si se estan cargando los datos, deshabilita el input para evitar que el usuario interactue con el
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password} //asignamos el valor del estado del input
                                onChange={(e) => setPassword(e.target.value)} //Seteamos al estado lo que se escriba en el input
                                disabled={loading} //estado de carga de datos del formulario. Si se estan cargando los datos, deshabilita el input para evitar que el usuario interactue con el
                            />
                        </div>
                    </div>
                    {/* //estado de carga de datos del formulario. Si se estan cargando los datos, deshabilita el BOTON para evitar que el usuario siga haciendo click hasta que se obtiene una respuesta */}
                    <button onClick={handleLogin} disabled={loading}>
                        login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
