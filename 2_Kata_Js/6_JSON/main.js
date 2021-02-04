console.log(JSON);

const objeto = {
    nombre: "Manuel",
    apellido: "Tejada",
};

let datos = JSON.parse('{"nombre":"Manuel", "apellido":"Tejada","edad":"25"}'); //Covertir JSON a Objeto literal
console.log(datos.apellido);
console.log(JSON.parse("{}"));
console.log({});
console.log(JSON.parse("25"));
console.log(JSON.parse("true"));

console.log(
    JSON.stringify({
        //Convertir Objeto literal a JSON
        nombre: "Manuel",
        apellido: "Tejada",
    })
);

{
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
    ];
}
