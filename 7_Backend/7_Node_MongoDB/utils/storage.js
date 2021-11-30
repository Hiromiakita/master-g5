const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    projectId: process.env.FIREBASE_PROJECT_ID,
    keyFilename: "service.json",
});

const bucket = storage.bucket(process.env.FIREBASE_BUCKET_URL);

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
