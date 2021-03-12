// Crear una clase Cine que tenga 3 atributos y el método reproducir como mínimo. :)
// El método reproducir puede diferenciar entre un objeto tipo Película o un objeto tipo Documental.
// Crear una clase Largometraje (elige atributos y métodos que sean apropiados)
// Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.

// Crea instancias de Película, Documental y Cine como mínimo.

// require -> nodejs
// *Cada clase debe estar en un archivo por separado.
// *Investiga como exportar clases de un archivo para importarlas en otro y poder usarlas.

const Pelicula = require('./Pelicula');
const Documental = require('./Documental');
const Cine = require('./Cine');

let p1 = new Pelicula('Tiburon', 123, 'Spielberg', ['actor1', 'actor2']);
let d1 = new Documental('La ruta del taco', 50, 'Sr Taquito', 'tacos');

// console.log(p1);
// p1.mostrarActores();
// p1.mostrarCréditos();

// console.log(d1);
// d1.mostrarCréditos();
// d1.serDocumental();

let c1 = new Cine('Cinemexicano', 'Puebla', 2);

c1.reproducir(p1);
c1.reproducir(d1);