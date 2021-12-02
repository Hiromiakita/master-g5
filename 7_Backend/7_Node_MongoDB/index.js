// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// // importamos express y lo guardamos en "app" para utilizar sus metodos
// const express = require("express");
// const app = express();

// // Declaramos el puerto donde correra el servidor local
// const PORT = 3000;

// // Decodificamos el body que menmanda el servidor para poder leerlo
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

// mongoose
//     .connect(
//         "mongodb+srv://manu:KWHE6zaLIYDAfl6M@devf.owinl.mongodb.net/Devf?retryWrites=true&w=majority"
//     )
//     .then(() => {
//         console.log("Conectado a la base de datos");

//         const testSchema = new Schema({
//             huevos: {
//                 type: Number,
//                 min: [6, "No son suficientes huevos, mandaste {VALUE}"],
//                 max: [12, "Son muchos huevos, mandaste {VALUE}"],
//             },
//             tocino: { type: Number, required: [true, "Debes colocar tocino"] },

//             bebida: {
//                 type: String,
//                 enum: {
//                     values: ["Cafe", "Malteada"],
//                     message: "{VALUE} no esta permitido",
//                 },
//                 required: [
//                     function () {
//                         return this.tocino > 3;
//                     },
//                     "La bebida es requerida porque pediste mas de 3 tocinos",
//                 ],
//             },
//         });
//         const testModel = mongoose.model("Desayuno", testSchema);

//         const lunch = new testModel({
//             huevos: 8,
//             tocino: 4,
//             bebida: "Malteada",
//         });

//        return lunch
//             .save()
//             .then(() => {
//                 console.log("El registro se ha guardado con exito");
//             })
//             .catch((err) => {
//                 console.log("El registro no se guardo con exito", err);
//             });
//     })
//     .catch((err) => {
//         console.log("Error al conectarse a la base de datos", err);
//     });

// // Mandamos un mensaje cuando se acceda a la ruta raiz de mi servidor local
// app.get("/", (request, response) => {
//     response.json({ info: "API utilizando NODE, MONGODB Y EXPRESS" });
// });

// // decirle a la aplicacion que se inicie en el puerto que especificamos
// app.listen(PORT, () => {
//     console.log(`Aplicacion corriendo en el puerto ${PORT}`);
// });
