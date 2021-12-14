// Importamos el archivo db para pasar la data de la capa de acceso a datos a la base de datos
const db = require("../db/db");

class PersonDAO {
    // Recibimos los datos que vienen desde la capa de servicios
    async createPerson(email, firstName) {
        // Esperamos a que se cree el id del registro nuevo en la tabla y cuando obtengamos una respuesta mandamos la consulta con los datos que vienen desde la capa de servicios
        const [id] = await db("person")
            .insert({
                email,
                first_name: firstName,
            })
            // Devolvemos el id para mostrarlo a usuario cuando se registre uno nuevo
            .returning("id");
        return id;
    }

    async findPersons() {
        const items = await db.select("*").from("person");
        return items;
    }

    async updatePerson(firstName, email, id) {
        const item = await db
            .update({ email, first_name: firstName })
            .from("person")
            .where("id", id);
        return item;
    }
}
// Exportamos la clase para utilzarla en otros archivos
module.exports = new PersonDAO();
