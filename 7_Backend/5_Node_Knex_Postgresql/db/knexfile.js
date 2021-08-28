//Archivo de configuracion para la conexion a la base de datos
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "api",
            user: "manu",
            password: "123",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
