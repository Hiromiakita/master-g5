console.log("Scope");

//Alcance de una variable o función

//Declaración de variables
//Variable es un espacio en la memoria

//GLOBAL -> Se puede utilizar en cualquier parte del programa. Se pueden sobreescribir.

var nombreDeVariable = 19;

nombreDeVariable = "hola";

//LOCALES -> Sólo existen en lugares específicos. Se puede sobreescribir.

let identificador = 200;

identificador = "perrito";

//CONSTANTES -> No se sobreescribe su valor y sigue la regla de una variable local

const idVariable = 100;

// idVariable = "adios";


var usuario = "Víctor";

{
    usuario = "Diana";
    var edad = 30;
}

console.log(usuario);
console.log(edad);

let usuario2 = "Mónica";

{
    usuario2 = "Carlos";
    let edad2 = 50;
    console.log(edad2);
}

let edad2 = 10;
console.log(usuario2);
console.log(edad2);