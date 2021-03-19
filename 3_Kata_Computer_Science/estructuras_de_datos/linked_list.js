class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.next = null;
    }
}

// Creación de un nodo prueba
// let nodo1 = new Nodo('hola');
// console.log(nodo1.next);

class LinkedList {
    constructor() {
        this.head = null;
    }
    addEnd(dato) {

        // 0. Crear un nodo
        let nodoNuevo = new Nodo(dato);

        // Validación para saber si voy a insertar un nodo por primera vez
        if(this.head === null) { //head es null porque la lista está vacía
            // Cuando añado el primer nodo a la lista
            // 1. Este nodo se convierte en el head
            this.head = nodoNuevo;
            // 2. Apunta a null
        } else {
            // Cuando añado un siguiente nodo al final

            // el next en head está vacío????

            let actualNodo = this.head;

            while(actualNodo.next) { //Ejecuta esto siempre y 
                                    // cuando el nodo actual 
                                    // tenga otro nodo en su next
                //Sí hay un nodo en next
                //voy a brincarme a ese nodo que está guardado en next
                actualNodo = actualNodo.next

            }

            // Terminé de buscar
            // Encontré un nodo apuntando a null
            actualNodo.next  = nodoNuevo;
        }

    }

    addStart() { // Método que añade un nodo al inicio de la lista ligada
        //0. Crear nuevo nodo
        //1. Nuevo nodo se posiciona en el head
        //2. El nuevo nodo apunta al head anterior
    }

    addBetween() {

    }

    remove(datoBorrar) {
        // Ubicarnos en el head
        // Comparar el dato que quiero borrar con el nodo actual
        // Si lo encuentro:
            // Lo borro 
            // El nodo anterior apunta al nodo siguiente del nodo eliminado
        // Si no lo encuentro, sigo buscando

    }

    buscar() {

    }

    isEmpty() {

    }

    length() {

    }
}

let list = new LinkedList();
console.log(list);
list.addEnd('dato 1');
list.addEnd('dato 2');
list.addEnd('dato 3');
list.addEnd('dato 4');
list.addEnd('dato TEST');
console.log(list);


//NOTA

// // estructura while
// let contador = 0;

// while(contador < 5) {
//     console.log('vuelta' + contador);
//     contador++
// }

// console.log(5 > 1);
// console.log(5 < 1);

// let nombre = 'H';

// // nombre es igual a 'Hiromi'
// if(nombre === 'Hiromi') {
//     console.log('nombre válido');
// }

// let apellido = null;
// //existe apellido?
// if(apellido) {
//     console.log('Sí existe');
// } else {
//     console.log('no existe info')
// }

// let usuario =  {
//     nombre: 'Diana',
//     edad: null
// }

// // Usuario tiene una edad definida?
// if(usuario.edad) {
//     console.log('usuario válido');
// } else {
//     console.log('edad no encontrada');
// }
