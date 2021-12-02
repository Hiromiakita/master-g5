console.log('Callbacks');

//Función convencional

function sumar() {
    let a = 1;
    let b = 3;
    let resultado = a + b;
    return ':)';
}

let resultadoSuma = sumar();
console.log(resultadoSuma);

function sumar2(n1, n2) {
    return n1 + n2;
}

let otroResultado = sumar2(10, 20);
console.log(otroResultado);


//Función flecha
let sumarFlecha = () => {
    let a = 1;
    let b = 3;
    let resultado = a + b;
    return ':)';
};

console.log(sumarFlecha());

let sumar2Flecha = (n1, n2) => {
    return n1 + n2;
}
// Si lo único que hay en el cuerpo de la función es un return, se puede quitar y también las llaves

let sumar2FlechaUnaLinea = (n1, n2) => n1 + n2;

console.log(sumar2Flecha(10, 20));
console.log(sumar2FlechaUnaLinea(100, 200));

// Si recibo SÖLO 1 parámetro, se pueden quitar los paréntesis

let mostrarMensaje = nombre => `Hola ${nombre}`;

console.log(mostrarMensaje('Ricardo'));

let dimeTuNombre = (nombre, apellido) => `Su nombre completo es ${nombre} ${apellido}`;

let duplicar = numero => numero * 2;

console.log(dimeTuNombre('Manuel', 'Tejada'));

console.log(duplicar(10));

let enviarDatos = (nombre, edad) => {
    let obj = {n: nombre, e: edad};
    return obj;
    // Todas las líneas de código después del retunr serán ignoradas
    // Sólo se puede retornar un valor
}

