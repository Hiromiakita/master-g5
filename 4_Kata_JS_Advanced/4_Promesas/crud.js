const request = require('request');
const URL_SERVER = "https://goodreads-devf-aaron.herokuapp.com";


//CRUD

//CREATE -> POST

let agregarUsuario = (name, lastName, biography, nacionalidad, gender, age, isAlive) => {
    const URL_POST = `${URL_SERVER}/api/v1/authors/`;
    const payload = {
        "name": name,
        "last_name": lastName,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age,
        "is_alive": isAlive
    };

    return new Promise ( (res, rej) => {
        request.post(URL_POST, {form: payload}, (error, resp, body) => {
            if(resp.statusCode === 201) {
                //ÉXITO
                res(body);
            } else {
                //RECHAZADA - ERROR
                rej(resp.statusCode);
            }
        })
    });
}

// agregarUsuario('H', 'A', 'H', 'MX', 'M', 1, false)
//     .then( (body) => {
//         console.log('Usuario añadido exitosamente!!');
//         console.log(body)
//     })
//     .catch( (statusCodeError) => console.log(`ERROR al añadir el usuario. StatusCode: ${statusCodeError}`));

//READ -> GET

let leerUsuarios = () => {
    return new Promise((resolve, reject) => {
        request.get(`${URL_SERVER}/api/v1/authors`, (err, res, body) => {
            if (res.statusCode === 200) {
                //ÉXITO
                resolve(body);
            } else {
                //RECHAZADA
                reject(err);
            }
        })
    })
}

// leerUsuarios().then( body => {
//     let usuarios = JSON.parse(body);
//     // let u1 = usuarios[0];
//     usuarios.forEach(usuario => formatearUsuario(value));

//     let edades = [10, 30, 15];

//     edades.forEach(edad  => {})
    
// }).catch( error => console.log(error));

let formatearUsuario = usuario => {
    let user =  {
        nombre: usuario.name,
        apellido: usuario.last_name
    }
    console.log(user);
}

//UPDATE

//DELETE


//PETICIONES ENCADENADAS


//EJEMPLO 1
let obtenerUsuario = (id) => {
    const URL = `https://swapi.dev/api/people/${id}`;
    return new Promise( (resolve, reject) => {
        request.get(URL, (error, resp, body) => {
            if(resp.statusCode === 200) {
                resolve(body);
            } else {
                reject(resp.body);
            }
        })
    });
}


let obtenerPelicula = url => {
    return new Promise ( (res, rej) => {
        request.get(url, (err, response, body) => {
            if(response.statusCode === 200) {
                res(body);
            } else {
                rej(response.body);
            }
        })
    })
}

// obtenerUsuario(1)
//     .then(body => {
//         let personajeInfo = JSON.parse(body);
//         obtenerPelicula(personajeInfo.films[0])
//             .then(bodyFilm => {
//                 let infoPeli = JSON.parse(bodyFilm);
//                 console.log(infoPeli);
//             })
//             .catch(msjError => console.log(msjError))

//     })
//     .catch(msj => console.log(msj));



// obtenerUsuario(000000)
//     .then(body => {
//         let infoUser = JSON.parse(body);
//         console.log(infoUser)
//     })
//     .catch(msjError => console.log(msjError))

// obtenerUsuario(10)
//     .then( () => console.log('usuario encontrado'))
//     .catch( () => console.log('usuario no encontrado'));

obtenerUsuario(1)
    .then(body => {
        let infoPersonaje = JSON.parse(body);
        let urlsPeliculas = infoPersonaje.films;
        urlsPeliculas.forEach(urlPeli => {
            obtenerPelicula(urlPeli)
                .then( (bodyPeli) => {
                    let infoPeli = JSON.parse(bodyPeli);
                    console.log(infoPeli.title)
                })
                .catch( (err) => {
                    console.log(err);
                });
        })
    })
    .catch(err => console.log(err));