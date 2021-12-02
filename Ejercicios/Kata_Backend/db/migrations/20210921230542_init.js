exports.up = function (knex) {
    return knex.schema
        .createTable("customer", (table) => {
            table.increments("customer_id").primary("customer_id", {
                constraintName: "customer_primary_key",
                deferrable: "deferred",
            });
            table.string("first_name", 25).notNullable();
            table.string("last_name", 25).notNullable();
        })

        .createTable("staff", (table) => {
            table.increments("staff_id").primary("staff_id", {
                constraintName: "staff_primary_key",
                deferrable: "deferred",
            });
            table.string("first_name", 25).notNullable();
            table.string("last_name", 25).notNullable();
        })

        .createTable("payment", (table) => {
            table.increments("payment_id").primary("payment_id", {
                constraintName: "payment_primary_key",
                deferrable: "deferred",
            });
            table.decimal("amount", 255).notNullable();
            table
                .timestamp("payment_date")
                .defaultTo(knex.fn.now())
                .notNullable();
            table
                .integer("customer_id")
                .references("customer_id")
                .inTable("customer");
            table.integer("staff_id").references("staff_id").inTable("staff");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("customer")
        .dropTable("payment")
        .dropTable("staff");
};
