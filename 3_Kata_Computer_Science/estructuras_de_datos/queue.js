class Queue {
    constructor() {
        this.collection = [];
    }
    enqueue(newItem) { //recibe nuevo elemento y lo añado a la cola (al final)
        this.collection.push(newItem);
    }

    dequeue() { //eliminar el primer elemento de la cola y lo rotorna
        return this.collection.shift();
    }

    length() { //nos regresa el tamaño de la cola
        return this.collection.length;
    }

    isEmpty() { //nos regresa una variable booleana de acuerdo a si está o no vacía nuestra cola
        return this.collection.length === 0;
    }

    front() { //nos regresa el primer elemento que está en la cola
        return this.collection[0];
    }
}

// let filaDeTortillas = new Queue();
// filaDeTortillas.enqueue('Ricardo');
// filaDeTortillas.enqueue('Giovanni');
// filaDeTortillas.enqueue('Abi');

// console.log(filaDeTortillas.front());

// filaDeTortillas.dequeue();

// console.log(filaDeTortillas.front());
// console.log(filaDeTortillas);
// filaDeTortillas.dequeue();
// console.log(filaDeTortillas);
// console.log(filaDeTortillas.dequeue());
// console.log(filaDeTortillas);
// console.log(filaDeTortillas.length());
// console.log(filaDeTortillas.isEmpty());
// filaDeTortillas.dequeue();
// console.log(filaDeTortillas);
// console.log(filaDeTortillas.isEmpty());


// EJEMPLO APLICABLE

class Cancion {
    constructor(titulo, duracion){
        this.titulo = titulo;
        this.duracion = duracion;
    }

    play() {
        return `reproduciendo ${this.titulo}`
    }
}

let miPlaylist = new Queue() // Creamos un objeto tipo cola 
let cancion1 = new Cancion('La chona', '5:30');
let cancion2 = new Cancion('La macarena', '4:30');
let cancion3 = new Cancion('Payaso del rodeo', '5:00');
let cancion4 = new Cancion('Aserejé', '4:30');
let cancion5 = new Cancion('El triste', '5:00');

miPlaylist.enqueue(cancion1);
miPlaylist.enqueue(cancion2);
miPlaylist.enqueue(cancion3);
miPlaylist.enqueue(cancion4);
miPlaylist.enqueue(cancion5);


// función de Js que nos permite hacer cosas cada cierto tiempo
setInterval(function () {
    //añadir condición para que si ya no tenemos elementos, nos muestre un mensaje 'NO HAY MÁS ELEMENTOS'
    console.log(miPlaylist.dequeue().play());
}, 2000);



//NOTAS

// console.log(5 > 3);
// console.log(7 === 10);

// let arreglo = [];

// console.log(arreglo.length === 0)