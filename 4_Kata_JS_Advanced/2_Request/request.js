// PETICIONES CON PAQUETE DE NPM ('REQUEST')

// const request = require("request");
// request.get("http://www.twitter.com", function (error, response, body) {
//     console.error("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//     console.log("body:", response.body); // Print the HTML for the Google homepage.
// });

//API (La podemos ver como un mesero (Api) que recibe nuestra peticion (Cliente) y nos indica un menu de que es lo que podemos pedir y como lo tenemos que pedir. El lleva nuestro pedido a el cocinero (Base de datos), el cocinero prepara el pedido y lo devuelve al mesero y este nos entrega la peticion).

// A las direcciones url de las apis se les conoce como endpoints.

const request = require("request");
// request.get(
//     "https://pokeapi.co/api/v2/pokemon/ditto",
//     function (error, response, body) {
//         if (response.statusCode === 200) console.log("body", body);
//         else console.log("Ocurrio un error en la peticion");
//     }
// );

// const request = require("request");
// request.get(
//     "https://pokeapi.co/api/v2/pokemon/ditto",
//     function (error, response, body) {
//         if (response.statusCode === 200) {
//             const json = JSON.parse(body);
//             console.log(json);
//         } else {
//             console.log(response.body);
//         }
//     }
// );

//Primer paso: consultar endpoint de la api
// Segundo paso: ver que me esta respondiendo ese endpoint
// Tercer paso: formatear la informacion para visualizarla de una mejor manera, ya sea con un json parse o un cliente http como inmsonia, postman o postwoman y si aun asi es dificil visualizarla, utilizar el Json edito online.

// Escribir el codigo para acceder a la informacion que me interesa

const GetPokemonName = (name) => {
    request.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
        (error, response, body) => {
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                console.log(json.forms[0].name);
            } else {
                console.log(response.body);
            }
        }
    );
};

GetPokemonName("pikachu");
