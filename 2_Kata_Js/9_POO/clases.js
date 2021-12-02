console.log('CLASES');

// Crear una clase
// class -> molde-plantilla para crear objetos a partir de ella
// el identifiador de una clase debe iniciar con mayúscula

class Alumno {
    // método que nos ayuda a inicializar nuestros objetos
    // sólo puede haber un método constructor
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
// console.log(m1);
// m1.comunicarse();
// m1.asignarDuenio('Hiromi');

let m2 = new Mascota('gato', 'wero', 'amarillo');
// m2.asignarDuenio(m1.duenio);

// console.log(m2);
// m2.comunicarse();

class Empleado {
    constructor(nombre, apellido, edad, antiguedad, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.salario = salario;
    }
}

let empleado = new Empleado ('Hugo', 'Garcias', 20, 5, 1000);

class Profesor {
    constructor(nombre, apellido, edad, antiguedad, salario, materia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.materia = materia;
        //Inicializar un método en el constructor
        this.edadCalculada = function () {
            let num = 10; 
            console.log('soy un método')
            return 100;
        }
        // Definir un valor inicial con el valor de retorno de un método de la misma clase
        this.test = this.metodoTest();
        this.categoría = this.definirCateogría();
        this.mostrarApellido = function () {
            console.log('apellido');
        }
    }
    //No podemos tener más de un constructor
    // constructor(rfc, domicilio) {
    //     this.rfc = rfc;
    //     this.domicilio = domicilio;
    // }

    //inicializamos métodos
    saludo(nombre, dia) {

    }
    //método ignorado por existir uno nombrado igual
    saludo(pais){

    }
    metodoTest() {
        return 'mensaje test';
    }
    definirCateogría() {
        return 'Ciencias';
    }
    mostrarNombre() {
        console.log('nombre');
    }
}

// let nuevoProfesor = new Profesor ('Diana', 'Gomez', 30, 3, 1000, 'español');
let profesor = new Profesor('m', 'n', 'hola', 5, 2, 'm');
console.log('profesor', profesor);
profesor.saludo()
profesor.edadCalculada();

let profesor2 = new Profesor();