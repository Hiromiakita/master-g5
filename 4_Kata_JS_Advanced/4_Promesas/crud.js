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

agregarUsuario('H', 'A', 'H', 'MX', 'M', 1, false)
    .then( (body) => {
        console.log('Usuario añadido exitosamente!!');
        console.log(body)
    })
    .catch( (statusCodeError) => console.log(`ERROR al añadir el usuario. StatusCode: ${statusCodeError}`));

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

let formatearUsuario = (usuario) => {
    let user =  {
        nombre: usuario.name,
        apellido: usuario.last_name
    }
    console.log(user);
}

//UPDATE

//DELETE