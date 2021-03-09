console.log('CLASES');

// Crear una clase
// class -> molde-plantilla para crear objetos a partir de ella
// el identifiador de una clase debe iniciar con mayúscula

class Alumno {
    // método que nos ayuda a inicializar nuestros objetos
    // recibe la info del exterior
    // asigna la info a las propiedades de los objetos

    constructor(nombre, apellido, edad) {
        this.nombre = nombre + ' ' + apellido,
        this.edad = edad;
    }
}

// crear un objeto a partir de la clase (molde) -> Instanciar la clase Alumno

let alumno1 = new Alumno('Luisa', 'Lopez', 15);
let alumno2 = new Alumno('Ángel', 'Lopez', 15);
let alumno3 = new Alumno('Diana', 'Lopez', 15);
let alumno4 = new Alumno('Lucy', 'Lopez', 15);
let alumno5 = new Alumno('Jorge', 'Lopez', 15);


// console.log(alumno5);

class Mascota {
    constructor(especie, nombreMascota, color) {
        this.especie = especie;
        this.nombre = nombreMascota,
        this.color = color;
        this.duenio = 'veterinario';
    }
    comunicarse() {
        console.log(`holaaaaa, soy ${this.nombre}`);
    }
    asignarDuenio(nombreDuenio){
        console.log(`Hola ${nombreDuenio}!!!!`);
        this.duenio = nombreDuenio;
    }

}

let m1 = new Mascota('perro', 'ponchito', 'café');
console.log(m1);
m1.comunicarse();
m1.asignarDuenio('Hiromi');

let m2 = new Mascota('gato', 'wero', 'amarillo');
m2.asignarDuenio(m1.duenio);

console.log(m2);
// m2.comunicarse();