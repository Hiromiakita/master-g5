// Importamos monngoose y destructuramos el metodo Schema para crear nuestros esquemas
const mongoose = require("mongoose");
const { Schema } = mongoose;

fileSchema = new Schema({
    file: {
        type: String,
        default:
            "https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png",
    },
}); //Esquema para guardar archivos de imagenes de articulos

// Creamos el esquema para los articulos
articleSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencias: { type: Number, required: true },
    // Propiedad para adjuntar una imagen al articulo
    article_pic: {
        type: String,
        default:
            "https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png", //si no viene imagen, se guarda esa por defecto
    },
});

// Creamos el esquema para los tickets
ticketSchema = new Schema({
    subtotal: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    IVA: { type: Number, default: 0 },
    articulos: [
        {
            //Utilizamos referencias para hacer la "relacion" con la coleccion de Articulos
            type: mongoose.Schema.Types.ObjectId,
            ref: "Articulo",
        },
    ],
});

//Exportamos los modelos para que el controlador pueda comunicarse con ellos
module.exports = {
    //Definimos los modelos de mongoose para utilizar los esquemas creados arriba
    articleModel: mongoose.model("Articulo", articleSchema),
    ticketModel: mongoose.model("Ticket", ticketSchema),
    filesModel: mongoose.model("Files", fileSchema),
};
