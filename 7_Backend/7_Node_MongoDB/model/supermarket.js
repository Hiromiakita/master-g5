const mongoose = require("mongoose");
const { Schema } = mongoose;

articleSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencias: { type: Number, required: true },
});

ticketSchema = new Schema({
    subtotal: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    IVA: { type: Number, default: 0 },
    articulos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Articulo",
        },
    ],
});

module.exports = {
    articleModel: mongoose.model("Articulo", articleSchema),
    ticketModel: mongoose.model("Ticket", ticketSchema),
};
