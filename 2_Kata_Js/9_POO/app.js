console.log('POO');

//OBJETOS LITERALES

//Creamos un objeto
let objeto1 =  {
    prop1: 'string',
    prop2: 12,
    metodo: function() {
        console.log('soy un método en un objeto');
    },
    calcular: function () {
        let resultado = this.prop2 * 10;
        console.log(resultado);
    }
}

console.log(objeto1);

//Acceder a propiedas
console.log(objeto1.metodo);
//Mandar llamar métodos
objeto1.metodo();
objeto1.calcular();

//Añadir propiedades nuevas
objeto1.prop3 = true;
objeto1.prop4 = 100;
objeto1.nuevoMetodo = function() {
    console.log('otro método');
};

console.log(objeto1);

//Modificar propiedades
objeto1.prop1 = 'Luis';

console.log(objeto1);



let alumno1 = {
    nombre: 'Diego',
    edad: 10,
    caminar () {
        console.log('Puedo caminar!!');
    }
}

let alumno2  = {
    nombre: 'Juan',
    edad: 12,
    caminar: function () {
        console.log('Puedo caminar!!');
    }
}

let alumno4  = {
    nombre: 'Ana',
    edad: 12,
    caminar: function () {
        console.log('Puedo caminar!!');
    }
}

let alumno5  = {
    nombre: 'Gabriela',
    edad: 12,
    caminar: function () {
        console.log('Puedo caminar!!');
    }
}