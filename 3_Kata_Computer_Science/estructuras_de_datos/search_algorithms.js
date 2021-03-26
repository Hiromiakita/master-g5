//BUSQUEDA SECUENCIAL

//ARRAY
//ELEMENTO A BUSCAR
//TAMANIO DEL ARRAY

// const myArray = [3, 4, 7, 8, 10, 18, 25, 30];

// const secuencialSearch = (array, elemento) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === elemento) {
//             return i;
//         }
//     }
//     return -1;
// };

// let res = secuencialSearch(myArray, 50);
// console.log(res);

//BUSQUEDA BINARIA
const myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = (array, elemento) => {
    let min = 0;
    let max = array.length;
    let aux;

    while (min < max) {
        aux = Math.floor((min + max) / 2); //Obteniendo elemento central
        if (array[aux] === elemento) {
            return aux;
        } else if (array[aux] < elemento) {
            min = aux + 1;
        } else {
            max = aux - 1;
        }
    }
    return -1;
};

let res = binarySearch(myOtherArray, 80);
console.log(res);
