//1 x 2 = 2
//2 x 2 = 4
//3 x 2 = 6 
//.
//.
//10 x 2 = 20

for(let i = 1; i <= 10; i++) {
    // console.log(i + " x " + 5 + " = " + i*5);
}


// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?

for(let i = 2; i <= 100; i+=2) {
    // console.log(i);
}

//Escribir todos los números que terminan en 0 y estén entre 2 y 121


for(let i = 10; i <= 121; i+=10) {
    // console.log(i);
}

for(let i = 2; i <= 121; i++) {
    if(i%10 === 0) {
        console.log(i);
    }
}

//EXTRA
// Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,
// ¿podrías ayudarle a crear un algoritmo que haga eso por el?

// let cal1 = 100;
// let cal2 = 90;
// let cal3 = 95;

//arreglo -> lista
let calificaciones = [100, 90, 95, 80, 70];
