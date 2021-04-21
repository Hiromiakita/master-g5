// ES5
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

const request = require("request");

// map, foreach, filter, reduce => ES6

//EJERCICIO 1
// const request = require("request");

// const GetPokemonName = (name) => {
//     request.get(
//         `https://pokeapi.co/api/v2/pokemon/${name}`,
//         (error, response, body) => {
//             if (response.statusCode === 200) {
//                 console.log(
//                     `Types: ` +
//                         JSON.parse(body).types.map((type) => type.type.name)
//                 );
//             } else {
//                 console.log(response.body);
//             }
//         }
//     );
// };

// GetPokemonName("charizard");

// EJERCICIO 2

// const getAuthorByName = (bookName) => {
//     const URL = `http://openlibrary.org/search.json?q=${bookName}`;
//     request.get(URL, (err, response, body) => {
//         if (response.statusCode === 200) {
//             const json = JSON.parse(body);
//             // console.log(json);
//             console.log(json.docs[0].author_name[0]);
//         }
//     });
// };

// getAuthorByName("La suma de los dias");

// EJERCICIO 3

// const getBooksByAuthor = (author) => {
//     const URL = `http://openlibrary.org/search.json?author=${author}`;
//     request.get(URL, (err, response, body) => {
//         if (response.statusCode === 200) {
//             const json = JSON.parse(body);
//             console.log(json.docs.map((doc) => doc.title));
//         } else {
//             console.log(err);
//         }
//     });
// };

// getBooksByAuthor("Isabel Allende");

// EJERCICIO 6

const getHazardDousAsterioids = (startDate, endDate) => {
    const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`;
    request.get(URL, (err, response, body) => {
        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            const dates = Object.keys(json.near_earth_objects);
            // console.log(dates);
            // console.log(dates[0]);
            // console.log(
            //     json.near_earth_objects["2021-03-05"].forEach((asterioid) =>
            //         console.log(asterioid.is_potentially_hazardous_asteroid)
            //     )
            // );

            dates.forEach((date) => {
                const result = json.near_earth_objects[date].filter(
                    (asteroid) => {
                        return asteroid.is_potentially_hazardous_asteroid;
                    }
                );

                console.log(result);
            });
        } else {
            console.log("error", err);
        }
    });
};

getHazardDousAsterioids("2021-03-01", "2021-03-08");
