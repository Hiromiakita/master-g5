// Solo pueden tener como maximo 2 elementos(aunque pueden tener ningun elemento o un elemento)

//Trabajan con numeros, pueden ser cualquier numeo entero

//Para ubibicar los elementos los valores menores a la raiz van a la izquierda y los mayores a la raiz van a la derecha

//Los valores de los nodos no pueden repetirse, y si se repiten, el valor que llega repetido reemplaza al otro

// Puden aplicarse por ejemplo: aplicaciones de busqueda de datos, los routers de ancho de banda para almacenar las tablas-router
// en la prioridad de procesos de un sistema operativo, algortimos de compresion como el jpeg y mp3.

// La primer clase repesenta a los nodos
// La segunda clase representa al arbol en si

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// El nodo puede empezar vacio y la clase Node representa a cada bolita

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new Node(value, null, null);
            return;
            //    este return lo utilizamos para que finalice la instruccion, porque solo estoy agregando la raiz
        }
        let currentNode = this.root;
        while (true) {
            // bucle infinito para ir buscando nodos
            if (currentNode.value > value) {
                if (currentNode.left !== null) {
                    // verificando si ya existe un nodo a la izquierda
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = new Node(value, null, null);
                    return; //detenemos el bucle infinito
                }
            } else {
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = new Node(value, null, null);
                    return; //detenemos el bucle infinito
                }
            }
        }
        return false;
    }

    contains(value) {
        //Verifica si un dato existe dentro de mi arbol y retorna un mensaje
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return console.log("Existe el elemento dentro del arbol");
            } else {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else {
                    if (value > currentNode.value) {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
        return console.log("No existe el elemento");
    }
}

const myTree = new Tree();

// myTree.add(30);
// myTree.add(15);
// myTree.add(60);
// myTree.add(7);
// myTree.add(22);
// myTree.add(17);
// myTree.add(27);
// myTree.add(45);
// myTree.add(75);

myTree.contains(80);

console.log(JSON.stringify(myTree, null, 2));
