import React, {useState, useEffect} from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const URL_IMAGE = 'https://starwars-visualguide.com/assets/img/characters/' 

    useEffect(() => {
       fetch('https://swapi.dev/api/people/')
       .then((res)=>res.json())
       .then((response)=>{
           console.log(response)
           setCharacters(response.results)
        //    console.log('----->', characters)
       })

    }, [])

    const getId =(url)=>{
        return url.split('/')[url.split('/').length - 2]
    }

    return (
        <div>
            <ul className="d-flex flex-wrap">
            {characters.map((character, index)=>(
              
                <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <li key={index}>
                   <img style={{width:'100%'}} src={`${URL_IMAGE + getId(character.url)}.jpg`} alt={'imagen'}/>
                   <h3>{character.name}</h3>
                </li>
                </div>
                </div>
                
            ))}
            
            </ul>
        </div>
    )
}

export default Characters
