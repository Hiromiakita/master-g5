let info = {
    statusCode: 200,
    data: [
        {
            nombre: 'Pablo',
            ciudad: 'Costa Rica'
        },
        {
            nombre: 'Laura',
            ciudad: 'Tabasco'
        },
        {
            nombre: 'Ricardo',
            ciudad: 'Guadalajara'
        },
        {
            nombre: 'Hiromi',
            ciudad: 'Guadalajara'
        }
    ]
};

// console.log(info);

let usuarios = info.data;

// forEach vs map
// forEach -> recorre el arreglo
// map -> recorre el arreglo y te entrega un nuevo arreglo (return)

let nombres = [];

usuarios.forEach((valorActual, index, array) => {
    nombres.push(valorActual.nombre)
})

// console.log(nombres);

usuarios.forEach(usuario => {
    // console.log(usuario.nombre)
});

let edades = [10, 10, 100, 30, 59, 59];

edades.forEach((edad, i) => {
    // console.log(edad, i);
});

usuarios.map((valorActual, index, array) => {
    // console.log(array);
});

let nombresUsuarios = usuarios.map(valorActual => valorActual.nombre);

// console.log(nombresUsuarios);

let ciudades = usuarios.map((usuario, index) => `${index + 1}. ${usuario.ciudad}`);
// console.log(ciudades);

let nuevasEdades = edades.map(edad => `<p>${edad}</p>`);

// console.log(nuevasEdades);

let edadesDiferentes = edades.map((edad, index) => {
    if (edad > 20) {
        return `${edad}: mayor`;  
    } else {
        return `${edad}: menor`; 
    }
});

// console.log(edadesDiferentes);


// Filter -> Recorre el arreglo y filtra elementos que cumplan con una condición

let valoresFiltrados = edades.filter((valorActual, index, arr) => {
    return index === 3;
})

// console.log(valoresFiltrados);

let edadesFiltradas = edades.filter(edad => edad > 15);

// console.log(edadesFiltradas);

let usuariosFiltrados = usuarios.filter(usuario => usuario.ciudad === 'Guadalajara');

// console.log(usuariosFiltrados);

let resultados = usuarios.filter(user => user.nombre.includes('a'));

// console.log(resultados);

let longitud = usuarios.filter(usuario => usuario.nombre.length === 5);
// console.log(longitud);

let res = usuarios.filter(usuario => usuario.nombre.length === 5).map(usuario => usuario.nombre);
console.log(res);