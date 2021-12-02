//Importando clase Largometraje
const Largometraje = require('./Largometraje')

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, actores) {
        super(titulo, duracion, director);
        this.actores = actores;
    }
    mostrarActores() {
        console.log('Actores:')
        for(let i = 0; i < this.actores.length; i ++) {
            console.log(this.actores[i]);
        }
    }
}

//Exportando la clase Pelicula
module.exports = Pelicula;