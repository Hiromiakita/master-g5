// Importamos el archivo db para pasar la data de la capa de acceso a datos a la base de datos
const db = require("../db/db");

class EndpointsDAO {
    // Recibimos los datos que vienen desde la capa de servicios
    async firstQuery() {
        const items = await db
            .select("first_name", "last_name", "amount", "payment_date")
            .from("customer")
            .innerJoin(
                "payment",
                "payment.customer_id",
                "customer.customer_id"
            );
        return items;
    }

    async secondQuery() {
        const items = await db
            .select(
                "staff.first_name as nombre_empleado",
                "customer.first_name as nombre_cliente",
                "amount",
                "payment_date"
            )
            .from("customer")
            .innerJoin("payment", "payment.customer_id", "customer.customer_id")
            .innerJoin("staff", "staff.staff_id", "payment.staff_id");

        return items;
    }
}
// Exportamos la clase para utilzarla en otros archivos
module.exports = new EndpointsDAO();
