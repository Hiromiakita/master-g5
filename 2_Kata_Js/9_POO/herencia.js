console.log('HERENCIA');

//clase principal -> super clase
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
    caminar() {
        console.log('estoy caminado');
    }
}

let p1 = new Persona('Diego', 'Lopez', 10);
console.log(p1);
p1.saludar();



// subclase 
// palabra reservada extens para traer las propiedades y métodos de la superclase

class Alumno extends Persona {
    //sigue siendo como una subclase
    constructor(nombre, apellido, edad, calificacion) {
        super(nombre, apellido, edad);
        this.calificacion = calificacion;
        this.escuela = 'Escuela Niños Héroes';
    }
    //todos los métodos de la super clase son heredados

    // métodos adicionales a los heredados
    reprobar() {
        console.log('Repobé');
    }
}

let a1 = new Alumno('Julio', 'Alvarez', 50, 90);
console.log(a1);
a1.saludar();
a1.caminar();
a1.reprobar();


// let a2 = new Alumno('Ana', 'Marquez', 100, 1000);
// console.log(a2);

class Empleado extends Persona {
    constructor(nombre, apellido, edad, antiguedad, salario) {
        super(nombre, apellido, edad);
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.ahorro = 10000;
    }
    gastar(cantidad) {
        this.ahorro = this.ahorro - cantidad;
    }
}

let empleado = new Empleado('Carla', 'Aguirre', 30, 5, 1000);
console.log(empleado);
empleado.saludar();
empleado.caminar();
empleado.gastar(500);


// tercer nivel de herencia
class Profesor extends Empleado {
    constructor(nombre, apellido, edad, antiguedad, salario, materia) {
        super(nombre, apellido, edad, antiguedad, salario);
        this.materia = materia;
    }
    darClase() {
        console.log('bla bla bla bla');
    }
    mostrarContexto() {
        console.log(this);
    }
    //sobreescritura de métodos
    saludar() {
        console.log(`hola, soy tu profesor ${this.nombre} de la clase de ${this.materia}`);
    }
    gastar() {
        console.log('estoy gastando');
    }
}

let profe1 = new Profesor('Carlos', 'Lozano', 30, 10, 111, 'matemáticas');
console.log(profe1);

profe1.saludar();
profe1.gastar();
profe1.darClase();
profe1.mostrarContexto();

let profe2 = new Profesor('Juan', 'Perez', 40, 10, 3000, 'español');
// console.log(profe2);
profe2.mostrarContexto();
