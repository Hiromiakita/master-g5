// Una función callback es una función que yo paso como argumento-parámetro.

function functionPrincipal(otrafuncion) {
    console.log('Soy la función principal 1');
    otrafuncion();
    console.log('Soy la función principal otra vez');
    otrafuncion();
    console.log('Soy la función principal de nuevo');
}

// Pasar función como parámetro
// Opción 1: Crear la función en los paréntesis

// Mandar llamar función principal
// functionPrincipal(function () {
//     console.log('Soy la función secundaria construida en los paréntesis')
// });

// Opción 2: Crear la función antes

function funcionSecundaria() {
    console.log('Soy la función secundaria creada por separado');
}

function otraFuncionSecundaria() {
    console.log('hola');
}

// Mandar llamar función principal
// functionPrincipal(funcionSecundaria);

// Mandar llamar función principal
// functionPrincipal(otraFuncionSecundaria);


function saludar(mensaje, unaFuncion) {
    unaFuncion();
    console.log(mensaje);
}

// saludar('HOla soy el mensaje', function () {
//     console.log('yo soy la función callback');
//     console.log('este mensaje también está en el callback');
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// });

let unMensaje = 'hola hola';
function callback() {
    console.log('soy el callback');
}

// saludar(unMensaje, callback);


function mostrarUsario(nombre, functionTransformadora) {
    functionTransformadora(nombre);
}

function convertir (loquesea) {
    console.log(loquesea.toUpperCase());
}

function contar(loquesea) {
    console.log(loquesea.length);
}

function convertirMinus(loquesea) {
    console.log(loquesea.toLowerCase());
}

function hola (x) {
    console.log('hola');
    console.log(x);
}

// mostrarUsario('Diego', hola);


let registrar = functionComprobar => {
    let nombre1 = 'Alma';
    functionComprobar(nombre1);
    let nombre2 = 'Julia';
    functionComprobar(nombre2);
    let nombre3 = 'Luis';
    functionComprobar(nombre3);
    let nombre4 = 'Héctor';
    functionComprobar(nombre4);
    let nombre5 = 'Adrián';
    functionComprobar(nombre5);
}

let mayorQueCuatro = nombre => {
    if(nombre.length > 4) {
        console.log('Nombre válido: ' + nombre);
    } else {
        console.log('Nombre inválido: ' + nombre);
    }
}

let iniciaConA = nombre => {
    if(nombre[0] === 'A') {
        console.log('Nombre válido: ' + nombre);
    } else {
        console.log('Nombre inválido: ' + nombre);
    }
}

// registrar(nombre => {
//     if(nombre === 'Adrián') {
//         console.log('nombre válido');
//     } else {
//         console.log('nombre inválido');
//     }
// });




let usuarios = [
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Romina', edad: 20 },
    { nombre: 'Jorge', edad: 12 },
    { nombre: 'Claudia', edad: 4 },
    { nombre: 'Erick', edad: 50 },
];

let registrarUsuarios = (usuarios, callbackExito, callbackError) => {
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].edad > 18) {
            callbackExito(usuarios[i]);
        } else {
            callbackError(usuarios[i]);
        }
    }
};

let exito = usuario => {
    console.log(`Registro de ${usuario.nombre} existoso`);
}

let error = usuario => {
    console.log(`Error, no pudimos registrar a ${usuario.nombre}`);
}

registrarUsuarios(usuarios, exito, error);


