let mostrarArray = () => {
    return [12, 1, 1, 10];
}

console.log(mostrarArray());

let mostrarArrayRetardado = () => {
    return new Promise ( (resolve, reject) =>  {
        setTimeout( () => {
            resolve([1, 2, 3, 4, 5, 6])
        }, 5000);
    } )
}

mostrarArrayRetardado().then( (array) => {
    console.log(array);
})


//Creación de una promesa
//Preparamos caso favorable y caso de error
// let nvaPromesa =  new Promise((resolve, reject) => {
//     let numero = 1;

//     if(numero > 5) {
//         //EXITOSO
//         resolve(numero);
//     } else {
//         //ERROR
//         reject('ERROR: Tu número es menor que 5');
//     }
// });

// Acceder a los dos posibles resultados de la primera promesa
//then  => recibe el pa ramatro envíado por el método resolve
// nvaPromesa.then( (num) => {
//     console.log('Mostramos el número desde el método then: ', num)
// }).catch( (msj) => {
//     console.log(msj);
// })

//Creación segunda promesa
// let stringValido = new Promise( (resolve, reject) => {
//     let palabra = 'holaa';

//     if( palabra.length > 4) {
//         //PROMESA RESUELTA
//         resolve(palabra);
//     } else {
//         //PROMESA RECHAZADA
//         reject('STRING INVÁLIDO');
//     }

// })


// Acceder a los dos posibles resultados de la segunda promesa
// stringValido.then( (palabra) => {
//     console.log(palabra.toUpperCase());
// }).catch( (errorMsj) => {
//     console.log(errorMsj);
// })