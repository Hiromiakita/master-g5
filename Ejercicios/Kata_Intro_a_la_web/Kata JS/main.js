//EJERCICIO1

const platillos = ["pozole", "enchilada", "barbabacoa", "Taco", "Picada"];

// for (let i = 0; i < platillos.length; i++) {
//     console.log(platillos[i]);
// }

//EJERCICIO2

// for (let i = 0; i < platillos.length; i++) {
//     if (platillos[i] == "barbabacoa" || platillos[i] == "pozole") {
//         console.log(platillos[i]);
//     }
// }

//EJERCICIO3

// for (let i = 0; i < platillos.length; i++) {
//     if (platillos.indexOf(platillos[i]) % 2 !== 0) {
//         console.log(platillos[i]);
//     }
// }

//EJERCICIO4
// for (let i = 0; i < platillos.length; i += 2) {
//     console.log(platillos[i]);
// }

for (elemento in platillos) {
    console.log(platillos);
}
