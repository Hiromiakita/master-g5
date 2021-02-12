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
// const cambiarTexto = () => {
//     let h1 = document.getElementById("titulo");
//     console.log(h1);
//     h1.innerHTML = "Un nuevo encabezado";
//     h1.style.color = "red";
//     h1.style.backgroundColor = "green";
//     let parrafo = document.getElementById("parrafo");
//     parrafo.style.color = "orange";
// };

// let boton = document.getElementById("boton");
// boton.onclick = cambiarTexto; //EVENTO ONCLICK

//SELECTORES POR CLASES
// let textos = document.getElementsByClassName("textos");
// console.log(textos[1]);
// for (let i = 0; i < textos.length; i++) {
//     textos[i].style.color = "blue";
//}

//SELECTORES POR ETIQUETAS
// let listas = document.getElementsByTagName("ul");
// console.log(listas);

//SELECTOR QUERYSELECTOR
// console.log(document.querySelector("#titulo"));
// console.log(document.querySelectorAll(".textos"));
// console.log(document.querySelectorAll("ul"));

// boton.addEventListener("mouseout", () => {
//     alert("No te vayas!!!");
// });

// let valor = document.getElementById("numero");
// let numero = parseInt(valor.innerHTML);

// let Sumar = () => {
//     numero = numero + 1;
//     valor.innerHTML = numero;
// };

// let Restar = () => {
//     numero = numero - 1;
//     valor.innerHTML = numero;
// };

// let Saludo = () => {
//     let hola = "Hola";
//     let adios = "Adios";
//     if (boton.innerHTML == hola) {
//         boton.innerHTML = adios;
//     } else {
//         boton.innerHTML = hola;
//     }
// };

const data = [
    {
        id: 1,
        pic:
            "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/13-flat-twist-with-twist-out-2.jpg?w=500&ssl=1",
        name: "Flat-Twist With Twist Out",
        difficulty: "Medium",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/",
    },
    {
        id: 2,
        pic:
            "https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/short-natural-hairstyles/4-natural-short-ponytail-with-twists.jpg?w=476&ssl=1",
        name: "Updo With Bangs for Short Hair",
        difficulty: "Easy",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/7/",
    },
    {
        id: 3,
        pic:
            "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/short-natural-hairstyles/2-updo-with-didi-braids.jpg?w=486&ssl=1",
        name: "Inverted Cornrows",
        difficulty: "Hard",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/12/",
    },
    {
        id: 4,
        pic:
            "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/short-natural-hairstyles/10-short-tight-natural-curls.jpg?w=451&ssl=1",
        name: "Straw Set",
        difficulty: "Medium",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/54/",
    },
    {
        id: 5,
        pic:
            "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/1500x/short-natural-hairstyles/7-twisted-roll-and-side-bang.jpg?w=458&ssl=1",
        name: "Twisted Roll and Side Bang",
        difficulty: "Medium",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/60/",
    },
    {
        id: 6,
        pic:
            "https://i1.wp.com/therighthairstyles.com/wp-content/uploads/1500x/short-natural-hairstyles/8-braids-and-double-bun.jpg?w=455&ssl=1",
        name: "Braids With Double Bun",
        difficulty: "Easy",
        info:
            "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/61/",
    },
    {
        id: 7,
        pic:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/issa-rae-attends-heavenly-bodies-fashion-the-catholic-news-photo-955825762-1541543191.jpg?crop=0.83341xw:1xh;center,top&resize=980:*",
        name: "Fulani Braids",
        difficulty: "Medium",
        info:
            "https://www.goodhousekeeping.com/beauty/hair/g3536/natural-hairstyles/?slide=3",
    },
    {
        id: 8,
        pic:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/18/1280x1668/wash-and-go.jpg?resize=980:*",
        name: "Wash and Go",
        difficulty: "Easy",
        info:
            "https://www.goodhousekeeping.com/beauty/hair/g3536/natural-hairstyles/?slide=10",
    },
    {
        id: 9,
        pic:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/18/1600x2349/bantu-knots-2.jpg?resize=980:*",
        name: "Bantu Knots",
        difficulty: "Easy",
        info:
            "https://www.goodhousekeeping.com/beauty/hair/g3536/natural-hairstyles/?slide=12",
    },
    {
        id: 10,
        pic:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/18/1280x1759/senegalese-twists-marley-twists.jpg?resize=980:*",
        name: "Sengalese Twist",
        difficulty: "Hard",
        info:
            "https://www.goodhousekeeping.com/beauty/hair/g3536/natural-hairstyles/?slide=24",
    },
];

let container = document.getElementById("main");

for (let i = 0; i < data.length; i++) {
    let element = data[i];
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let image = document.createElement("img");

    container.append(div);
    div.append(h4);
    div.append(image);

    h4.innerHTML = element.name;
    image.src = element.pic;
    div.setAttribute("class", "elemento");
}

console.log(document.body);

JSON.parse(pokemones);
