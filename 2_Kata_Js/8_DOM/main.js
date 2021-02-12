// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.styleSheets);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 4000);

// document.writeln("Hola mundo de nuevo <br>");

// let nombre = "Mi nombre es Manuel";
// let parrafo =
//     "<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quia!</p>";

// document.write(nombre);
// document.write(parrafo);
// document.write(parrafo);

//SELECTORES POR ID
const cambiarTexto = () => {
    let h1 = document.getElementById("titulo");
    console.log(h1);
    h1.innerHTML = "Un nuevo encabezado";
    h1.style.color = "red";
    h1.style.backgroundColor = "green";
    let parrafo = document.getElementById("parrafo");
    parrafo.style.color = "orange";
};

let boton = document.getElementById("boton");
// boton.onclick = cambiarTexto; //EVENTO ONCLICK

//SELECTORES POR CLASES
let textos = document.getElementsByClassName("textos");
console.log(textos[1]);
for (let i = 0; i < textos.length; i++) {
    textos[i].style.color = "blue";
}

//SELECTORES POR ETIQUETAS
let listas = document.getElementsByTagName("ul");
console.log(listas);

//SELECTOR QUERYSELECTOR
console.log(document.querySelector("#titulo"));
console.log(document.querySelectorAll(".textos"));
console.log(document.querySelectorAll("ul"));

boton.addEventListener("mouseout", () => {
    alert("No te vayas!!!");
});

let valor = document.getElementById("numero");
let numero = parseInt(valor.innerHTML);

let Sumar = () => {
    numero = numero + 1;
    valor.innerHTML = numero;
};

let Restar = () => {
    numero = numero - 1;
    valor.innerHTML = numero;
};

let Saludo = () => {
    let hola = "Hola";
    let adios = "Adios";
    if (boton.innerHTML == hola) {
        boton.innerHTML = adios;
    } else {
        boton.innerHTML = hola;
    }
};
