// Importamos postgres connection para guardarlo en la variable 'pool'
const Pool = require("pg").Pool;
// Este es el objeto de configuracion para conectarme a la base de datos
const pool = new Pool({
    user: "manu",
    host: "localhost",
    database: "api",
    password: "123",
    port: 5432,
});

//GET ALL REGISTERS
const getUsers = (request, response) => {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
};

// GET REGISTER BY ID
const getUserById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("SELECT * FROM users WHERE id =$1", [id], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
};

// CREATE REGISTER
const createUser = (request, response) => {
    const { name, email } = request.body;

    pool.query(
        "INSERT INTO users (name,email) VALUES ($1,$2)",
        [name, email],
        (error, result) => {
            if (error) {
                throw error;
            }
        }
    );
    response.status(201).send("El usuario ha sido agregrado con exito");
};

//UPDATE REGISTER
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3",
        [name, email, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            response
                .status(200)
                .send(
                    `El usuario con ID: ${id} se ha actualizado correctamente`
                );
        }
    );
};

// DELETE

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("DELETE FROM users WHERE id = $1", [id], (error, result) => {
        if (error) {
            throw error;
        }
        response
            .status(200)
            .send(`El usuario con ID: ${id} se ha eliminado correctamente`);
    });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
