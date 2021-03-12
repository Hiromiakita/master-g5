class Cine {
    constructor(nombre, ubicacion, numSalas) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.numSalas = numSalas;
    }
    reproducir(largometraje) {
        if(largometraje.actores) {
            console.log(`reproduciedo pelicula ${largometraje.titulo}`)
        } else {
            console.log(`reproduciedo documental ${largometraje.titulo}`)
        }
    }
}

module.exports = Cine;