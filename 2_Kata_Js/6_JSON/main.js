console.log(JSON);

const objeto = {
    nombre: "Manuel",
    apellido: "Tejada",
};

let datos = JSON.parse('{"nombre":"Manuel", "apellido":"Tejada","edad":"25"}'); //Covertir JSON a Objeto literal
console.log(datos.apellido);
console.log(JSON.parse("{}"));
console.log({});
console.log(JSON.parse("25"));
console.log(JSON.parse("true"));

console.log(
    JSON.stringify({
        //Convertir Objeto literal a JSON
        nombre: "Manuel",
        apellido: "Tejada",
    })
);
