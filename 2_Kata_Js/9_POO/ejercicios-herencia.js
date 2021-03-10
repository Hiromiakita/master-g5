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
console.log(m1);
m1.calcularPromedio();

//subclase maestro de física

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

let mf1 = new MaestroFisica('física', [90, 90, 90, 80, 70, 60], 5);
console.log(mf1);

mf1.calcularPromedio();

// subclase maestro de música

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

let mm1 = new MaestroMusica('música', [100, 89, 80, 70], 50);
console.log(mm1);
mm1.calcularPromedio();


// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados
//     c. Un método debe regresar la direccion
//     d. Un método debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia
// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol
// . Crear los getters y setters
//     correspondientes.
// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100
// 5.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.