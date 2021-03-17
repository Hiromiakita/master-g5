console.log('PILA - STACK');

let pila = []; // Un arreglo se puede comportar como un pila

// console.log(pila);

// añadir un elemento
pila.push('elemento 1');

// console.log(pila);

pila.push('elemento 2');

// console.log(pila);

pila.push('elemento 3');

// console.log(pila);

//eliminamos un elemento
//método por nos regresa el elemento que eliminó.
// console.log(pila.pop())

// console.log(pila);

// Palíndromos -> ana = ana ... perro != orrep

// Ingrese una palabra
// Con ayuda de pop, ordenemos la palabra alravés en una nueva variable
// comparar 

function esPalindromo(palabra) {
    let arrayPalabra = [];
    for(let i = 0; i< palabra.length; i++) {
        arrayPalabra.push(palabra[i])
    }
    
    console.log(arrayPalabra);

    //guardar palabra al revés en un arreglo
    let arrayPalabraVolteada = [];

    for(let i = 0; i< palabra.length; i++) {
        arrayPalabraVolteada.push(arrayPalabra.pop());
    }

    console.log(arrayPalabraVolteada);

    // if(arrayPalabra == arrayPalabraVolteada) {
    //     console.log(`${palabra} es un palíndromo`)
    // } else {
    //     console.log(`${palabra} NO es un palíndromo`)
    // }

    //comparar mis arreglos

    //retornar o mostrar mensaje de acuerdo a si es o no un palindromo
}

esPalindromo('ana');