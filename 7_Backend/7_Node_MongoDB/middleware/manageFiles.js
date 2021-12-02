const uploadImage = require("../utils/storage");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res, next) => {
    if (process.env.NODE_ENV === "production") {
        //Evaluamos si viene un archivo el la peticion y de ser asi es procesado por el nuestro storage.js que es el encargado de subir el arhivo a firebase y devolvernos la url de ese archivo una vez se haya subido
        if (req.file) next(); //Otorgamos el control a el proceso uploadImage
        const url = await uploadImage(req.file);
        req.body.file = url;
    } else {
        //Evaluamos si viene un archivo el la peticion y de ser asi es procesado por el nuestro storage.js que es el encargado de subir el arhivo a firebase y devolvernos la url de ese archivo una vez se haya subido
        if (req.file) next(); //Otorgamos el control a la siguiente linea de codigo
        req.body.file = `${req.protocol}://${req.host}/${req.file.path}`; // Construir la url con la direccion del archivo en mi equipo
    }
    next(); //Terminamos el middleware
};
