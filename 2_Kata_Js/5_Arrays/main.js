// //definir arreglos

// //SIEMPRE EL PRIMER ELEMENTO DE UN ARRAY CONTIENE LA POSICION 0
// const arreglo_1 = []; //forma tradicional
// console.log(arreglo_1);

// const arreglo_2 = Array.of(1, "Hola", false, []); //forma mediante el metodo de prototipo
// console.log(arreglo_2);

// const arreglo_3 = Array(50).fill("coca-cola");
// console.log(arreglo_3); // llenado por el metodo fill

// const arreglo_4 = ["Mundo", 25, true, ["a", "b", "c", [1, "loro"]]]; //llenado manualmente
// console.log(arreglo_4);
// console.log("------>" + arreglo_4[3][3]);

// let arreglo_5 = new Array(); //de la forma antigua por instancia
// console.log(arreglo_5);

// //METODOS DE ARREGLOS

// const arreglo_6 = ["plato", "vaso", "cuchara"];
// arreglo_6.push("tenedor"); //Agrega un elemento al final de un arreglo
// console.log(arreglo_6);

// arreglo_6.pop(); //Quita el elemento final del arreglo
// console.log(arreglo_6);

// let arreglo_7 = ["Hola", "como", "estas", 1];
// let cadena = arreglo_7.join(":"); //convirte arrays a strings
// console.log(cadena);

// const cadena_2 = "Mi nombre es Manuel";
// const arreglo_8 = cadena_2.split(" "); //convirte strings a arrays
// console.log(arreglo_8);

// const arreglo_9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arreglo_9.reverse();
// console.log(arreglo_9);

// //Recorrer arreglos
// // for (let i = 0; i < arreglo_9.length; i++) {
// //     console.log(arreglo_9[i]);
// //     //Forma tradicional
// // }

// const arreglo_10 = ["papa", "queso", "pasta"];

// arreglo_10.forEach(function (x) {
//     document.write(`<li>${x}</li>`);
//     //Por cada elemento que recorre hace una determinada accion
// });

// const map = arreglo_9.map((elemento, i) => {
//     return elemento, i;
//     //Devuuelve un array con todos los elementos y tambien su posicion
// });

// console.log("MAP--->", map);

// const filter = arreglo_9.filter(function (item) {
//     return item > 3;
// });
// console.log(filter);

//OBJETOS LITERALES (LLAVE, VALOR)

//Formas de declarar objetos

let objeto_1 = {};
console.log(objeto_1); //Forma tradicional

let obejto_2 = new Object(); //Forma por instancia
console.log(obejto_2);

const objeto_3 = {
    nombre: "Manuel",
    apellido: "Tejada",
    edad: 25,
    pasatiempos: ["escuchar musica", "ver futbol", "dar clases"],
    contacto: { email: "correo@correo.com" },
    saludar: function () {
        return console.log(`Ire a comer pizza con ${this.nombre}`);
    },
};
console.log(objeto_3);

console.log(objeto_3.nombre);
console.log(objeto_3.edad);
console.log(objeto_3["edad"]);
console.log(objeto_3.pasatiempos[1]);
console.log(objeto_3.saludar());

console.log(Object.keys(objeto_3));
console.log(Object.values(objeto_3));
console.log(objeto_3.hasOwnProperty("sexo"));
