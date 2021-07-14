let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).role
    : "";

let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

//CREAMOS EL ESTADO INICIAL
// USERDETAILS: ES PARA ALMACENAR EL OBJETO DE USUARIO DEVUELTO POR EL SEVIDOR AL INICIAR SESION CORRECTAMENTE. INTENTAMOS LEER EL USERDETAILS DESDE EL LOCALSTORAGE PARA MANTENER EL ESTADO DE INICIO DE SESION EN TODAS LAS PESTANAS
//TOKEN: ES PARA ALMACENAR EL TOKEN DE AUTENTICACION DEVUELTO POR EL SERVIDOR, TAMBIEN SE CONSERVA EN EL LOCALSTORAGE DEL NAVEGADOR
//LOADING: ES PARA ALMACENAR EL ESTADO DE CARGA DEL FORMULARIO DE INICIO DE SESION CUANDO SE ENVIA
//ERRORMESAAGE: ES PARA ALMACENAR EL MENSAJE DE ERROR DEVUELTO SI FALLA EL INICIO DE SESION
export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null,
};

//CREAMOS LA FUNCION REDUCTORA QUE ACEPTA UN INITIAL STATE Y UN OBJETO DE ACCION ({TYPE:ACTION_TYPE}) COMO ARGUMENTOS Y LUEGO DEVUELVE UN NUEVO ESTADO BASADO EN EL TIPO DE ACCION ESPECIFICADO

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.role,
                token: action.payload.token,
                loading: false,
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: "",
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.payload.message,
            };
    }
};
