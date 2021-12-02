// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

let mostrarMensaje = (mensaje, callback) => {
    callback(mensaje);
};

// Primera llamada a función mostrarMensaje()
// mostrarMensaje('Soy Hiromi', nombre => console.log(nombre) );

let mostrarEnConsola = msj => console.log(msj);

// Segunda llamada a función mostrarMensaje()
// mostrarMensaje('Otro mensaje', mostrarEnConsola);

// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y un callback. 
//     La función debe retornar como resultado, mediante el callback, 
//     cual es el tipo de dato de la variable ingresada e imprimir su contenido.


// Creación de la función principal
let definirVariable = (variable, f) =>  {
    f(variable, false);
};

// Mandar llamar función principal

// definirVariable('2', (v, b) => {
//     if (b) {
//         console.log(`${v} es tipo: ${typeof v}`);
//     } else {
//         console.log('error')
//     }
// })


// 3.- Crear una función que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

//Creación función principal
let operacion = (num1, num2, functionMat) => {
    functionMat(num1, num2);
};


//Mandar llamar función principal
let suma = (n1, n2) => {
    console.log(`La suma de ${n1} y ${n2} es ${n1 + n2}`);
}

// operacion(10, 30, suma);

let resta = (num1, num2) => {
    console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
}

// operacion(70, 10, resta);

let multi = (n1, n2) => {
    console.log(`La multiplicaci´n de ${n1} y ${n2} es ${n1 * n2}`);
};

// operacion(1, 2, multi)

// suma(1, 100);
// 4.- Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

// Creación de función principal
let transformarStrign = (palabra, funcionTransformadora) => {
    funcionTransformadora(palabra);
};

//Creación función callback
let toMayus = palabra => console.log(`Palabra transformada ${palabra.toUpperCase()}`);

// EJecutar función principal
transformarStrign('Jejeje', toMayus);

let toMinus =  palabra => console.log(`Palabra transformada ${palabra.toLowerCase()}`);


transformarStrign('hoLaaaaaaAAA', toMinus);



// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

let filtrar = (cantidades, funcionComparar) => {
    
    funcionComparar(cantidades);
};

let cantidades = [100, 20, 300, 500, 1, 120, 150, 200, 100, 500, 1000, 250];
let compararCantidades = (cantidades) => {

    let nvoArray = cantidades.filter( (posicionActual, indice, array) => {
        return posicionActual <  100;
    } );

    console.log(nvoArray);
    
    // let nuevoArray = [];
    // for(let i = 0; i < cantidades.length; i++) {
    //     if (cantidades[i] > 120) {
    //         nuevoArray.push(cantidades[i]);
    //     }
    // }
    // console.log(nuevoArray);
};

filtrar(cantidades, compararCantidades);