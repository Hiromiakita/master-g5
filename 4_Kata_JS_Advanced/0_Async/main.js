// console.log("1"); //Esto se va al callback queue
// console.log("2"); //Esto se va al callback queue
// console.log("3"); //Esto se va al callback queue

//RESPUESTA 1,2,3

// console.log("1"); // Esto se va al callback queue
// setTimeout(() => { //Se va al callback queue, pero al ser asincrono lo envia al callback stack y espera una respuesta, lo delega un thread para no detener el thread principal
//     console.log("2");
// }, 2000);
// console.log("3"); //esto se va al callback queue

//El Event Loop revisa el queue y el stack y unicamente si el queue ya esta vacio, va a verificar si hay una respuesta en el call stack
// si la hay, la devuelve, sino sigue esperando la respuesta.

//Respuesta 1,3,2

// console.log("1"); //esto se va al callback queue
// setTimeout(() => {
//     console.log("2"); //Se va al callback queue, pero al ser asincrono lo envia al callback stack y espera una respuesta, lo delega un thread para no detener el thread principal
// }, 3000);
// setTimeout(() => {
//     console.log("3"); //Se va al callback queue, pero al ser asincrono lo envia al callback stack y espera una respuesta, lo delega un thread para no detener el thread principal
// }, 2000);
// console.log("4"); //esto se va al callback queue

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 1000);
// for (let i = 0; i < 9999999999; i++);
// console.log("3");

const EjemploDeCallback = (callback) => {
    callback(console.log("Multiplicacion de dos numeros"));
};

EjemploDeCallback(() => {
    console.log(3 * 3);
});
