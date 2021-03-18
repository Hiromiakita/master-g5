// Clase Pila
// métodos: 
// push
// pop

class Stack {
    constructor(){
        this.count = 0;
        this.storage = {};
    }

    push(nvoElemento) { // Añadir elementos al final de nuestra pila

        // storage almacena el nuevo elemento
        // this.storage = {0: 'elemento1', 1: 'elemento 2', 2: 'Elemento 3'};

        this.storage[this.count] = nvoElemento;

        // contador incrementa
        this.count++
    }

    pop() { //Eliminar el último elemento insertado
        
        // Quitar el último elmento

        //alaceno o hago una copia del elemento que voy a borrar
        let ultimoElemnto = this.storage[this.count-1];

        //elimino elemento del storage
        delete this.storage[this.count-1]

        // Disminuir el contador
        this.count--;

        // retorna el elemento que se eliminó
        return ultimoElemnto;
    }

    peek() { //retorna el últmo elemento insertado
        return this.storage[this.count - 1]
    }

    length() {
        return this.count;
    }

}


let miPila = new Stack();

console.log(miPila);

miPila.push('Lau');
miPila.push('Alexis');
miPila.push('Miguel');
miPila.push('Pablo');

console.log(miPila);

console.log('Objeto retornado', miPila.pop());

console.log(miPila);

console.log(miPila.peek());
console.log(miPila.length());

//NOTAS

// let test = {
//     nombre : 'Hiromi',
//     telefono: 3333
// }

// //acceder a propiedad con un puntito
// console.log(test.nombre);
// //acceder a propiedad con un string (nombre de la propiedad)
// console.log(test['nombre']);
// //añadir nueva propiead al objeto con un puntito
// test.apellido = 'Akita';
// test.ciudad = 'Gdl';

// //añadir propiedad al objeto con corchetes y string
// test['nombreMascota'] = 'Puppy';
// test[8] = 'hola';

// console.log(test);
// console.log(test[8]);
// // console.log(test.telefono);
// // console.log(test['telefono']);

// NOTA 2

let arrayTest = ['hola', 'adiós', 'jeje'];

let arrayTest2 = new Array();