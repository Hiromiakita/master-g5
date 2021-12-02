// Importamos la libreria knex para que interprete la consulta en lenguaje Javascript que viene desde la capa de acceso a datos, a lenguaje SQL
const knex = require("knex");

// Importamos el archivo de configuracion de conexion a la base de datos
const knexfile = require("./knexfile");

// Le enviamos el archivo de configuracion de conexion a la base de datos a knex y aqui ya vienen tambien desde la capa de acceso a datos los datos que queremos insertar
const db = knex(knexfile.development);

// Exportamos la constante para utilzarla en otros archivos
module.exports = db;
