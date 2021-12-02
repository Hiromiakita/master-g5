console.log("condicionales");

//REASIAGNACIÓN DE VARIABLES

//declarando y asigando un valor
var nombre = "Diego";

console.log(nombre);

nombre = "Laura";

console.log(nombre);

nombre = 100;

console.log(nombre);

nombre = "";

console.log(nombre);

// undefined
// console.log(edad);

//CONDICIONES

var numero = 10;

// Se ejecuta si condición se cumple
if (numero > 50) {
    console.log("Número mayor que 50");
}

var edadUsuario = 2;

//Dos opciones: se cumple o no se cumple
if (edadUsuario >= 18) {
    console.log("bienvenido al mundo de la adultez :C");
} else {
    console.log("no eres bienvenido");
}

//Tres opciones

var miBoleto = 499;

if (miBoleto < 300) {
    console.log("Compraste un boleto blanco");
} else if (miBoleto < 400) {
    console.log("compraste un boleto azul");
} else if (miBoleto < 500) {
    console.log("compraste un boleto verde");
} else {
    console.log("compraste un boleto amarillo");
}

//OPERADOR AND -> SE DEBEN CUMPLIR DOS O MÁS CONDICIONES

//1. Un número menor que 50
//2. Un número mayor que 15

var numerito = 1;

if (numerito < 50 && numerito > 15) {
    console.log("número válido");
} else {
    console.log("inválidos");
}

// 1. Número mayor que 20
// 2. Par

var numeroEjemplo = 31;

if(numeroEjemplo > 20 && numeroEjemplo%2 === 0) {
    console.log("sí pasa");
} else {
    console.log("no pasa");
}

//OPERADOR OR -> Mínimo una condición se tiene que cumplir

// Número sea menor que 100 o par

var num = 113;

if (num < 100 || num % 2 === 0) {
    console.log("cumpliste!!");
} else {
    console.log("no se cumple ninguna de las condiciones");
}

var numeritoDos = 10;

//igual a 20 o igual a 50

if (numeritoDos === 20 || numeritoDos === 50 || numeritoDos > 100) {
    console.log("perfecto!!!")
} else {
    console.log("no es perfecto :C");
}


