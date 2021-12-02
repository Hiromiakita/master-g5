// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones	 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

// super clae Maestro

class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.califacaciones = calificaciones;
        // [10, 10, 9, 8, 7]
    }
    calcularPromedio() {
        let suma = 0;
        let promedio = 0;

        //sumar todas las calificaciones
        for (let i = 0; i < this.califacaciones.length; i++) {
            suma += this.califacaciones[i];
        }

        //dividir la suma entre la cantidad de calificaciones que tenemos

        promedio = suma/this.califacaciones.length;

        console.log(`El promedio es ${promedio}`);
        return promedio;
    }
}

let m1 = new Maestro('Inglés', [100, 90, 70, 90, 100, 100, 100, 90, 70, 60]);
// console.log(m1);
// m1.calcularPromedio();

//subclase maestro de física

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

let mf1 = new MaestroFisica('física', [90, 90, 90, 80, 70, 60], 5);
// console.log(mf1);

// mf1.calcularPromedio();

// subclase maestro de música

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

let mm1 = new MaestroMusica('música', [100, 89, 80, 70], 50);
// console.log(mm1);
// mm1.calcularPromedio();


// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". LISTO
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno. LISTO
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados LISTO
//     c. Un método debe regresar la direccion LISTO
//     d. Un método debe permitir modificar la direccion LISTO 
//     e. Buscar la mejor manera de aprovechar la herencia


// superclase

class Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea() {
        return this.largo * this.ancho;
    }
    // Encapsulamiento 

    // GET
    mostrarDireccion () {
        return this.direccion;
    }

    // SET
    modificarDireccion (nvaDireccion) {
        this.direccion = nvaDireccion;
    }
}

let construccion1 = new Construccion(2, 4, 5, 'blabla', 10, 10, 18);
// console.log(construccion1);
// console.log(construccion1.direccion);
// modificar valor de una propiedad
// construccion1.direccion = 'nueva dirección';
// acceder a una propiedad -> método
// console.log(construccion1.mostrarDireccion());
// modificar una propiedad -> método
construccion1.modificarDireccion('esta es la nueva dirección desde un método');

class Casa extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, habitaciones, amor) {
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.habitaciones = habitaciones;
        this.amor = amor;
    }
}

let nuevaCasa = new Casa(1, 6, 2, 'x', 4, 10, 20, 3, true);
// console.log(nuevaCasa.mostrarDireccion());

class Edificio extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, departamentos, recepcion) {
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.departamentos = departamentos;
        this.recepcion = recepcion;
    }
}

// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol
// . Crear los getters y setters
//     correspondientes.

//superclase
class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }
    //Encapsulamiento

    //Acceder a la propiedad GET (retorna la propiedad)
    getCantidad() {
        return this.cantidad;
    }
    //Modificar la propiedad SET
    setCantidad(nvaCantidad) {
        this.cantidad = nvaCantidad;
    }
}

//sublase
class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }
    getAzucar() {
        return this.azucar;
    }
    setAzucar(nvaCantidadAzucar) {
        this.azucar = nvaCantidadAzucar;
    }
}

//sublase
class Cerveza extends Bebida {
    constructor(cantidad, alcohol) {
        super(cantidad);
        this.alcohol = alcohol;
    }
    getAlcohol() {
        return this.alcohol;
    }
    setAlcohol(nvoPorcentajeAlcohol) {
        this.alcohol = nvoPorcentajeAlcohol;
    }
}

let coca = new Refresco(250, 35);

// console.log(coca);

// coca.setCantidad(500);
// console.log(coca.getCantidad());



// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo) LISTO
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100

//superclase
class Electrodomestico {
    constructor(precio, color, capacidad) {
       this.precio = precio;
       this.color = color;
       this.consumoEnergetico = 100;
       this.capacidad = capacidad;
    }
    getColor() {
        return this.color;
    }
    setColor(nvoColor) {
        this.color = nvoColor;
    }
    
    //ECMAScript
    get _capacidad() {
        return this.capacidad*4;
    }

    set _capacidad(nvaCapacidad) {
        this.capacidad = nvaCapacidad;
    }
}


let electrodomestico1 = new Electrodomestico(100, 'blanco', 10);
console.log(electrodomestico1)

console.log(electrodomestico1._capacidad)
electrodomestico1._capacidad = 500;




// 5.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.


class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal() {
        this.precio =  this.consumoEnergetico * this.carga;
    }

    // Encapsulamiento ECMA
    get _carga() {
        return this.carga;
    }
    
    set _carga(nvaCarga) {
        this.carga = nvaCarga;
    }
}