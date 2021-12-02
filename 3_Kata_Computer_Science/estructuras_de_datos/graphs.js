const graph1 = [
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
];

const graph2 = [[]];

class Node {
    constructor(value) {
        this.value = value;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }
    addNodes(value) {
        const node = new Node(value); //Construimos el nodo
        this.nodes.push(node); // Agregregamos el nodo a la lista de nodos
    }

    getNode(value) {
        let nodo;
        if (this.nodes.length == 0) {
            return null; //Retorna null si no encuentra algun nodo en la lista de nodos
        }
        //Si encuentra algun nodo en la lista de nodos, lo asignamos a esta variable
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].value === value) {
                nodo = this.nodes[i].value;
            }
        }
        return nodo; //retornando la valor del nodo
    }

    addEgdes(value1, value2) {
        //Valor del nodo1 y valor del nodo2
        const node1 = this.getNode(value1); //Busco el primer nodo
        const node2 = this.getNode(value2); //Busco el segundo nodo
        const edge = [node1, node2]; // representacion de la arista (el nodo 1 va hacia el nodo 2)
        this.edges.push(edge);
    }

    print() {
        for (let i = 0; i < this.edges.length; i++) {
            console.log(`${this.edges[i][0]}------>${this.edges[i][1]}`);
        }
    }
}

const myGraph = new Graph();

// Agregando nodos
myGraph.addNodes(0);
myGraph.addNodes(1);
myGraph.addNodes(2);
myGraph.addNodes(3);
myGraph.addNodes(4);

// Agregando aristas
myGraph.addEgdes(0, 1);
myGraph.addEgdes(0, 2);
myGraph.addEgdes(1, 3);
myGraph.addEgdes(3, 0);
myGraph.addEgdes(4, 1);

myGraph.print();
