//EJERCICIO1

const platillos = ["pozole", "enchilada", "barbabacoa", "Taco", "Picada"];

// for (let i = 0; i < platillos.length; i++) {
//     console.log(platillos[i]);
// }

//EJERCICIO2

// for (let i = 0; i < platillos.length; i++) {
//     if (platillos[i] == "barbabacoa" || platillos[i] == "pozole") {
//         console.log(platillos[i]);
//     }
// }

//EJERCICIO3

// for (let i = 0; i < platillos.length; i++) {
//     if (platillos.indexOf(platillos[i]) % 2 !== 0) {
//         console.log(platillos[i]);
//     }
// }

//EJERCICIO4
// for (let i = 0; i < platillos.length; i += 2) {
//     console.log(platillos[i]);
// }

for (elemento in platillos) {
    console.log(platillos);
}

//EJERCICIOS DE OBJETOS

var data = {
    results: [
        {
            name: "Bulbasaur",
            national_number: "001",
            evolution: null,
            sprites: {
                normal:
                    "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
                large: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                animated:
                    "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
            },
            type: ["Grass", "Poison"],
            total: 318,
            hp: 45,
            attack: 49,
            defense: 49,
            sp_atk: 65,
            sp_def: 65,
            speed: 45,
        },
        {
            name: "Ivysaur",
            national_number: "002",
            evolution: null,
            sprites: {
                normal:
                    "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png",
                large: "https://img.pokemondb.net/artwork/ivysaur.jpg",
                animated:
                    "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif",
            },
            type: ["Grass", "Poison"],
            total: 405,
            hp: 60,
            attack: 62,
            defense: 63,
            sp_atk: 80,
            sp_def: 80,
            speed: 60,
        },
        {
            name: "Zeraora",
            national_number: "807",
            evolution: null,
            sprites: {
                normal:
                    "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zeraora.png",
                large: "https://img.pokemondb.net/artwork/zeraora.jpg",
                animated:
                    "https://img.pokemondb.net/sprites/black-white/anim/normal/zeraora.gif",
            },
            type: ["Electric"],
            total: 600,
            hp: 88,
            attack: 112,
            defense: 75,
            sp_atk: 102,
            sp_def: 80,
            speed: 143,
        },
    ],
};

for (let i = 0; i < data.results.length; i++) {
    let element = data.results[i];
    if (element.total > 400) {
        console.log(element.name);
    }
}

for (let i = 0; i < data.results.length; i++) {
    let element = data.results[i];
    for (j = 0; j < element.type.length; j++) {
        if (element.type[j] == "Grass") {
            console.log(element.name);
        }
    }
}
