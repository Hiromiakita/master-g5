console.log('DOM');

//function que muestra mensaje
function mostrarMensaje() {
    console.log('Soy un mensaje');
}

//Obtener un elemento del DOM a través de su ID
let textoPrueba = document.getElementById("texto-prueba");
console.log(textoPrueba);


//Función reemplazarlo
function reemplazar() {
    //innerHTML nos da acceso a todo el elemento
    textoPrueba.innerHTML = '<h6>soy un h6</h6>';
}

//Obtener un elemento del DOM a través de su ID
let texto1 = document.getElementById('t1');

function cambiarTexto () {
    //innerText nos da acceso al texto del elemento
    texto1.innerText = 'Soy otro texto';
}

//Obtener un elemento del DOM a través de su ID

let link = document.getElementById('link');

function cambiarAtributo() {
    link.href = 'https://www.w3schools.com/js/';
    link.innerText = 'w3Schools';
    console.log('ya cambió el href y el texto');
}

let imagen = document.getElementById('gatito');

function cambiarImagen() {
    imagen.src = 'https://marvelcrowd.com/media/Captura-de-pantalla-2015-10-13-a-las-12.28.25.png';
}

//Crear arreglo de imágenes (sus direcciones)
let imagenes = [
    'https://cdn.nutricionistadeperros.com/wp-content/uploads/2018/01/cute-3106473_640.jpg', 
    'https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-668x400x80xX.jpg',
    'https://static2.abc.es/media/sociedad/2016/10/20/gato-huerfano2-kM2--620x349@abc.jpg'
];

console.log(imagenes[1]);

//obtern elmento desde el HTML por su ID
let imagenPrincipal = document.getElementById('imagen-base');
let posicionActual = 0;

function seguir() {
    imagenPrincipal.src = imagenes[posicionActual];

    if(posicionActual < imagenes.length -1) {
        posicionActual += 1;
    }
}

let textoP = document.getElementById('texto-p');


function cambiarColor() {
    console.log('cambiando color');
    textoP.style.color = '#FF00FF';
}

function cambiarBackground() {
    textoP.style.backgroundColor = 'yellow';
}

function crecer() {
    textoP.style.fontSize = '30px';
}

function desaparecer () {
    textoP.style.display = 'none';
}

function mostrar () {
    textoP.style.display = 'block';
}

let imgGatito = document.getElementById('img-gatito');

function nuevaImagen() {
    imgGatito.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfURA3c0WWBq-JcWPRmbCrtBIHjxhrZH5AA&usqp=CAU';
}

function regresarImagen() {
    imgGatito.src = 'https://www.ecestaticos.com/imagestatic/clipping/2f6/975/2f69756c991ac98fb8986390e09776bd.jpg';
}

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

console.log(parrafos[0]);

//Cambiar de estilo todos los elemetos <p>

function modificarEstilosP() {

    for(let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = 'green'; 
    }

}

let imagenesHtml = document.getElementsByTagName('img');

function ocultarImagenes () {
    for (let i = 0; i < imagenesHtml.length; i++) {
        imagenesHtml[i].style.display = 'none';
    }
}