const dotenv = require("dotenv");
dotenv.config();
//Archivo de configuracion para la conexion a la base de datos
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DB,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
