// const axios = require('axios');

// LLamada para traer x cantidad de pokemones
    // 0. Hacer llamada a API (listado de pokemones)
    // 1. Hacer llamda individual para traer la info de cada pokemon
    // 2. Seleccionar la infomación a mostrar y la pusimos en un objeto
    // 3. Crear un arreglo con los pokemones que necesitamos
    // 4. Construyo en el HTML una carta por cada pokemon de nuestro arreglo general
let obtenerInfoPokemones = (limite) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limite}`;
    let arrayPokemones = [];

    axios.get(URL)
        .then(respuesta => {
            // Listado de pokemones con sus URL individuales
            let infoPokemones = respuesta.data.results;

            // Iterar listado de pokemones para hacer llamadas individuales
            infoPokemones.forEach(pokemon => {

                axios.get(pokemon.url)
                    .then(respuestaInd => {
                        // console.log(respuestaInd.data.types);
                        // Crear un objeto individual con info requerida
                        let infoPokemonInd = {
                            nombre: respuestaInd.data.name,
                            urlImagen: respuestaInd.data.sprites.front_default,
                            tipos: respuestaInd.data.types.map(tipo => tipo.type.name),
                        }

                        arrayPokemones.push(infoPokemonInd);
                        
                    })
                    .catch(err => console.log(err));
            })

            // Solución provisional -> Promise.all()
            setTimeout(() => {
                console.log(arrayPokemones);
                //Contruir el HTML con todos los pokemones
                crearCards(arrayPokemones);

            }, 5000);

        })
        .catch(error => console.log(error));
}

// obtenerInfoPokemones(10);

let crearCards = (pokemones) => {

    // Traemos referencia a la section con el id pokemons-container
    let contenedorPokemones = document.getElementById('pokemons-container');

    pokemones.forEach(pokemon => {
        //Creamos etiquetas HTML que mostrarán la info de cada pokemon
        let card = document.createElement('div');
        let titulo = document.createElement('p');
        let imagen = document.createElement('img');

        //Definir orden de los elementos
        contenedorPokemones.append(card);
        card.append(titulo, imagen);

        // Mostrar info
        titulo.innerText = pokemon.nombre;
        imagen.src = pokemon.urlImagen;
    })
}

//Función que nos muestra los pokemones filtrados por nombre
    // 1. TOmamos el arreglo inicial de pokemones y buscamos coincidencias con el input
    // 2. Construyo una tarjeta por cada pokemon que coincide con la búsqueda

