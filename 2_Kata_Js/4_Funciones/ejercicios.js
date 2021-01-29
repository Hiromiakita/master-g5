// Hacer una función que convierta pesos a dólares - RETURN 

//20 pesos = 1 dolar

function convertirADolar (pesos) {
    let dolares = pesos/20;
    return dolares;
}

let dolares = convertirADolar(230);
// console.log("Dólares: " + dolares);

// let pesos = parseInt(prompt("Ingresa una cantidad en pesos"));
// let dolares2 = convertirADolar(pesos);
// console.log("Dólares: " + dolares2);


// Hacer una función que cuente el número de caracteres de una palabra - RETURN 

function contarCaracteres (palabra) {
    let cantidadCaracteres = palabra.length;
    return cantidadCaracteres;
}

// console.log(contarCaracteres("hola"));

// console.log(contarCaracteres("automovil"));

// console.log(contarCaracteres(" "));

// //PENDIENTE -> CONDICIÓN PARA SÓLO ACEPTAR STRINGS
// console.log(contarCaracteres(1));


// Hacer una función que halle el máximo entre dos números - RETURN

// Hacer una función que halle el máximo entre tres números - RETURN

// Hacer una función que calcule el IVA de una cantidad (16%) - RETURN

function calcularIva(precioProductoSinIVa) {
    let iva =  precioProductoSinIVa * .16;
    return iva;
}

// console.log(calcularIva(100));
// console.log(calcularIva(350));

// Hacer una función para ingresar cualquier letra del alfabeto  - RETURN
// y verifique si es vocal o consonante

function verificar(letra) {
    if(letra === 'a' || letra === 'A'|| letra === 'e' || letra === 'E'|| letra === 'i'  || letra === 'I' || letra === 'o' || letra === 'O' || letra === 'u' || letra === 'U') {
        return 'vocal';
    } else if ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) {
        return 'consonante';
    } else {
        return 'entrada inválida';
    }
}

// console.log(verificar(1));

// console.log('b' > 'a')

// Hacer una función que verifique si un número es positivo o negativo - RETURN

function verificarNumero(numero) {
    if(typeof numero === "number") {
        if(numero > 0) {
            return 'positivo';
        } else if(numero === 0) {
          return 'neutro';  
        } else {
            return 'negativo';
        }
    } else {
        return 'inválido';
    }
}

// console.log(verificarNumero(1));

// Hacer una función que imprima todos los números naturales 
//en reversa, desde n hasta 1.


function imprimirEnReversa(n) {
    for(let i = n; i >= 1; i--) {
        console.log(i);
    }
}

// imprimirEnReversa(100);




// Hacer una función que imprima todos los números pares entre 1 y 100

function imprimirPares() {
    for(let i = 1; i <= 100; i++) {
        if(i%2 === 0) {
            console.log(i);
        }
    }
}

// imprimirPares();







// Hacer una función que imprima todos los números nones entre 1 y 100

function imprimirNones () {
    for(let i = 1; i <= 100; i+=2) {
        console.log(i);
    }
}

// imprimirNones();







// Hacer una función que halle la suma de todos los números naturales entre 1 y n - RETURN

function sumarTodos(n) {
    let suma = 0;

    for(let i = 1; i <= n; i++) {
        suma += i;
    }

    return suma;
}


console.log(sumarTodos(100));












// Hacer una función que imprima una pirámide de asteriscos como la siguiente:
       
//                      *
//                     * *
//                    * * *
//                   * * * *
//                  * * * * *



















let imprimirPiramide = (n) => // n es el número de pisos de la pirámide 
{
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (let k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
        }
        console.log(str);
    }
}

// imprimirPiramide(10);