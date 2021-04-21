// CRUD : CREATE, READ, UPDATE, DELETE

const request = require("request");

const URL_SERVER = "https://goodreads-devf-aaron.herokuapp.com";

//CREATE

const createAuthor = (
    name,
    lastName,
    biography,
    nacionalidad,
    gender,
    age,
    isAlive
) => {
    const URL_POST = `${URL_SERVER}/api/v1/authors/`;
    const jsonSend = JSON.stringify({
        name: name,
        last_name: lastName,
        nacionalidad: nacionalidad,
        biography: biography,
        gender: gender,
        age: age,
        is_alive: isAlive,
    });

    request.post(URL_POST, { form: jsonSend }, (err, response, body) => {
        if (response.statusCode === 201) {
            const author = JSON.parse(body);
            console.log(author);
            s;
        } else {
            console.log(response.statusCode);
        }
    });
};

createAuthor("Manu", "Tj", "ES", "cualquier cosa", "M", 25, false);
