import React, {useState, useEffect} from 'react';
import Character from './Character';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    // const [nombre, setNombre] = useState('nombre inicial');

    useEffect(() => {
        getPersonajes();
    }, [])

    const getPersonajes = () => {
        fetch('https://swapi.dev/api/people/')
       .then((res)=>res.json())
       .then((response)=>{
           console.log(response)
           setCharacters(response.results)
        //    console.log('----->', characters)
       })
    }

    return (
        <div>
            <ul className="d-flex flex-wrap">
            {characters.map((character, index) => (
              <Character url={character.url} nombre={character.name} key={index}/>
            ))}
            
            </ul>
        </div>
    )
}

export default Characters
