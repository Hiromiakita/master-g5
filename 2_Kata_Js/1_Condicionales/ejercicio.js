// Ejercicio 1

// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.

// Ejercicio 2
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

// let num1 = parseInt(prompt("Ingresa primero número")); //5
// let num2 = parseInt(prompt("Ingresa segundo número")); //7
// let num3 = parseInt(prompt("Ingresa tercer número")); //8

// let numMayor = 0;
// //numero1 es el mayor
// if(num1 > num2 && num1 > num3) {
//     numMayor = num1;
//     //numero2 es el mayor
// } else if(num2 > num1 && num2 > num3) {
//     numMayor = num2;
//     //numero3 es el mayor
// } else {
//     numMayor = num3;
// }

// console.log("El numero mayor es: " + numMayor);


// Ejercicio 3
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.

// let num1 = parseInt(prompt("Ingresa primero número")); //5
// let num2 = parseInt(prompt("Ingresa segundo número")); //7
// let num3 = parseInt(prompt("Ingresa tercer número")); //8

// alert("El resultado es: " + (num1 + num2 + num3));

// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 3 y 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

// var numeroUsuario = prompt("Ingresa un número");

// if(numeroUsuario%3 === 0 && numeroUsuario%5 === 0) {
//     console.log("cool");
// }

// Arnoldo sigue en su búsqueda de números, ahora busca números raros. Los
// números raros son aquellos que son divisibles entre 5 y entre 3, pero no entre 2. El
// quiere crear un programa en el cual ingrese un número y le diga si es raro o no.


// var numUsuario2 = prompt("Ingresa un número");

// if(numUsuario2%3 === 0 && numUsuario2%5 === 0 && numUsuario2%2 === 1) {
//     console.log("número raro");
// }

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código happy el quiere desplegar el mensaje “cool bro, the life is short” y para el
// código sad él quiere, desplegar el mensaje “go for tacos bro, tacos = smile”

// var codigo = prompt("Ingresa el código") ;

// if(codigo === "happy") {
//     console.log("cool bro, the life is short");
// } else if(codigo === "sad") {
//     console.log("go for tacos bro, tacos = smile");
// } else {
//     console.log("código inválido");
// }

// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son paladin : nivel 0 -10,
// caballero dorado : nivel 11 - 30, dios destructor: 31 - 50.

let nivel = parseInt(prompt("Ingresa tu nivel"));

if(nivel < 0) {
    console.log("Inválido")
} else if(nivel <= 10) {
    console.log("Nivel paladin");
} else if (nivel <= 30) {
    console.log("Nivel caballero dorado");
} else if (nivel <= 50) {
    console.log("Nivel destructor");
} else {
    console.log("Inválido");
}
