// Con ayuda de una clase, crea n cantidad de objetos que puedan ser mostrados en el DOM
  // Estos objetos deben representar un usuario
  // todos los usuarios tiene tres características: 
  // una imagen de perfil genérica (misma imagen para todos los usuario), 
  // nombre del usuario nombres distintos
  // descripción genérica (misma descripción para todos los usuarios).

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.srcImagen = 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png';
        this.descripcion = 'Esto es una descripción';
    }
}

// FORMA 1 DE CREAR MUCHOS OBJETOS TIPO USUARIO

// let u1 = new Usuario('Erick');
// let u2 = new Usuario('Diego');
// let u3 = new Usuario('Regina');

// let usuarios = [u1, u2, u3];

// console.log(usuarios);

// FORMA 2 DE CREAR MUCHOS OBJETOS TIPO USUARIO

let nombres = ['Ana', 'Julio', 'Carlos', 'Javier', 'Diego', 'Karla', 'César', 'Ximena', 'Mariana'];
let usuariosObjeto = [];

for(let i = 0; i < nombres.length; i++) {
    let usuario = new Usuario(nombres[i]);
    usuariosObjeto.push(usuario)
}

console.log(usuariosObjeto);

let contenedor = document.getElementById('contenedor');

for(let i = 0; i < usuariosObjeto.length; i++) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let p = document.createElement("p");

    contenedor.append(div);
    div.append(img);
    div.append(h4);
    div.append(p);

    img.src = usuariosObjeto[i].srcImagen;
    h4.innerText = usuariosObjeto[i].nombre;
    p.innerText = usuariosObjeto[i].descripcion;
}






  // EXTRA
  // con ayuda de un botón se muestra un form (puede ser en un modal o en la misma página) 
  // cono este form, puedes crear un nuevo objeto, mismo que se debe mostrar en el DOM
  // SUPER EXTRA 
  // Con ayuda de un botón en cada card podemos modificar el nombre del usuario, 
  // si consideras que existe otra forma, puedes usar otra cosa en lugar de un botón