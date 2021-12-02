const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    projectId: "upload-files-node-mongo-3933d",
    keyFilename: "service.json",
});

const bucket = storage.bucket("upload-files-node-mongo-3933d.appspot.com");

module.exports = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) reject("No hay ningun archivo");
        const newFilename = `${file.originalname}_${Date.now()}`; //Renombramos el archivo
        const fileUpload = bucket.file(newFilename); //Le indicamos al bucket cual es el archivo a subir

        const blobStream = fileUpload.createWriteStream({
            //Mandamos el archivo por pedacitos
            metadata: {
                contentType: file.mimetype, //que tipo de archivo es el que estoy enviando
            },
        });
        blobStream.on("error", (error) => {
            reject(error);
        }); //Regresamos un error si algo falla

        blobStream.on("finish", () => {
            const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media`;
            resolve(url);
        }); // Si todo fue bien, me regresa la url de mi archivo

        blobStream.end(file.buffer); // Empezamos la transmision de datos de nuestro backend al bucket
    });
};
