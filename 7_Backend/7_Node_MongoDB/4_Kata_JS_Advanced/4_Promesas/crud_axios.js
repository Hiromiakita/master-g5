const axios = require("axios");


//GET
let obtenerUnPokemon = id => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //Las función get me retorna una promesa
    axios.get(URL)
        .then(response => {
            console.log(response.data.name);
            console.log('Crear elemento HTML con info pokemon');
        })
        .catch(error => {
            console.log(error.response.status);
            console.log('Mostrar alerta de error');
            console.log('recargar la página');
        });
}

obtenerUnPokemon(00000);

//GET -> authorsAPI
let obtenerUnAutor = () => {};

//POST -> authorsAPI

let crearAutor = () => {};

//UPDATE - PATCH -> authorsAPI

let actualizarAutor = () => {};

//DELETE -> authorsAPI

let deleteAutor = () => {};


