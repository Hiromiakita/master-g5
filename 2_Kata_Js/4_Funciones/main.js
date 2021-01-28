console.log("funciones");

//CREACIÓN DE LA FUNCIÓN - PASOS
function saludar() {
    console.log("BIENVENIDO!!");
    console.log("Regístrate");
}

//MANDAR LLAMAR O EJECUTAR LA FUNCIÓN
// saludar();

// saludar();

// saludar();


function sumar() {
    let numero1 = 1;
    let numero2 = 5;
    let resultado = numero1 + numero2;
    console.log(resultado);
}

// sumar();


//USO DE PARÁMETROS PARA RECIBIR INFO DEL EXTERIOR
function sumarDosNumeros (num1, num2) {
    let resultado = num1 + num2;
    console.log(resultado);
}

// sumarDosNumeros(10, 30);

// sumarDosNumeros(1000, 20);

// sumarDosNumeros(1, 30);

// let numero1 = parseInt(prompt("Ingresa primer número"));
// let numero2 = parseInt(prompt("Ingresa el segundo número"));

// sumarDosNumeros(numero1, numero2);

function saludarUsuario(nombre) {
     console.log("Bienvenide " + nombre);
}

// saludarUsuario("Julio");
// saludarUsuario("Antonio");
// saludarUsuario("Angélica");

// let nombreUsuario = prompt("Ingresa tu nombre");

// saludarUsuario(nombreUsuario);


function registrarUsuario(nombre, edad) {
    if(edad < 18 ) {
        console.log("Registro fallido");
    } else {
        console.log("Bienvenidx " +  nombre);
    }
}

// registrarUsuario("Liz", 20);
// registrarUsuario("Liz", 16);


//VALOR DE RETORNO

function restar (num1, num2){
    let resultado = num1 - num2;
    return resultado;
}


let resultadoResta = restar(50, 40);
console.log(resultadoResta);

let resultadoResta2 = restar(15, 10);
console.log(resultadoResta2);






//EXTRA

//FUNCIONES ANÓNIMAS

let multiplicar = function (num1, num2, num3) {
    let resultado = num1 * num2 * num3;
    return resultado;
}

let resultadoMult = multiplicar(5, 4, 2);
console.log(resultadoMult);

//FUNCIÓN FLECHA

let dividir = (numero1, numero2) => {
    let resultado = numero1/numero2;
    return resultado;
}

let resultadoDivision = dividir(20,5);
console.log("Resultado división: ", resultadoDivision);

//ECMAScript6