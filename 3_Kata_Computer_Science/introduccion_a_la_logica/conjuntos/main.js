// UNION (Necesitamos unir los dos conjuntos, el de freelancers y el de ingenieros y remover los elementos repetidos)

// let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
// let freelancers = new Set(["Luis", "Manuel", "Jose", "Rene", "Hiromi"]);
// let union = new Set([...ingenieros, ...freelancers]);
// console.log(union);

//  INTERSECCION (buscar si un elemento de un conjunto esta en otro conjunto)
let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
console.log(ingenieros.has("Juan"));

let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
let freelancers = new Set(["Luis", "Manuel", "Jose", "Rene", "Hiromi"]);
let interseccion = new Set([...ingenieros].filter((x) => freelancers.has(x)));
console.log(interseccion);

// DIFERENCIA
// let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
// let freelancers = new Set(["Luis", "Manuel", "Jose", "Rene", "Hiromi"]);
// let diferencia = new Set([...ingenieros].filter((x) => !freelancers.has(x)));
// console.log(diferencia);

// DIFERENCIA SIMETRICA
// let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
// let freelancers = new Set(["Luis", "Manuel", "Jose", "Rene", "Hiromi"]);
// let union = new Set([...ingenieros, ...freelancers]);
// let interseccion = new Set([...ingenieros].filter((x) => freelancers.has(x)));
// console.log(union);
// console.log(interseccion);
// let diferenciaSimetrica = new Set(
//     [...union].filter((x) => !interseccion.has(x))
// );
// console.log(diferenciaSimetrica);

// COMPLEMENTO
// let empleados = new Set([
//     "Manuel",
//     "Pablo",
//     "Hiromi",
//     "Laura",
//     "Miguel",
//     "Jose",
//     "Rene",
//     "Luis",
// ]);
// let ingenieros = new Set(["Manuel", "Pablo", "Hiromi", "Laura", "Miguel"]);
// let complemento = new Set([...empleados].filter((x) => !ingenieros.has(x)));
console.log(8 * 8);
