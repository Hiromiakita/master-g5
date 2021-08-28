// ARCHIVO DE MIGRACIONES, DONDE SE ENCUENTRAN LOS ESQUEMAS PARA CREAR Y ELIMINAR ENTIDADES

// Esta funcion sirve para crear las tablas, constraints, columnas, etc...
exports.up = function (knex) {
    return knex.schema.createTable("person", (table) => {
        table.increments("id");
        table.string("email").notNullable().unique();
        table.string("first_name").notNullable();
        table.timestamps(true, true);
    });
};

// Esta funcion sirve para eliminar las tablas que se crean en el exports UP (osea lo contrario)
exports.down = function (knex) {
    return knex.schema.dropTable("person");
};
