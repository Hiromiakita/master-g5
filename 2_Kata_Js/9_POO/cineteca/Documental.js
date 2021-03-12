const Largometraje = require('./Largometraje');

class Documental extends Largometraje {
    constructor(titulo, duracion, director, tematica) {
        super(titulo, duracion, director);
        this.tematica = tematica;
    }
    serDocumental() {
        console.log('soy un documental');
    }
}

module.exports = Documental;