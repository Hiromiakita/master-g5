const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    projectId: "upload-files-node-mongo-3933d",
    keyFilename: "",
});

const bucket = storage.bucket("upload-files-node-mongo-3933d.appspot.com");
