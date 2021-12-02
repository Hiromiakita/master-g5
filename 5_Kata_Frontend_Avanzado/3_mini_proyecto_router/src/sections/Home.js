import React, { useEffect, useState } from 'react';
import Gif from '../componentes/Gif';
import Search from '../componentes/Search';

const Home = () => {

    // const [nombreVariable, nombreMetodoQueActualiza] = useState(valorInicialVariable)
    const [gifs, setGifs] = useState([]);

    // función que hace petición a la API Giphy para traernos gifs
    const getGifs = (busqueda) => {
        console.log('soy la función getGifs')
        const API_KEY = 'wdgO3uLmLzjA8zDsQpHNhP72WcG8NTsz';
        // template strings
        const URL_GIPHY = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${busqueda}&limit=10`; 

        fetch(URL_GIPHY)
            .then(respuesta => respuesta.json())
            .then(responstaJson => {
                console.log(responstaJson.data);
                // vamos a actualizar el estado de la varibale gifs
                setGifs(responstaJson.data);
            });
    }

    const saludar = () => {
        console.log('saludo desde Home');
    }

    // ciclo de vida ** Pendiente
    useEffect(() => {
        // Se ejecuta una vez cuando el componente se rendiriza
        getGifs('demo');
    }, []);


    return (
        <div>
           <Search getGifs={getGifs} saludo={saludar}/>
           {/* <Gif 
            titulo="donald trump comedy GIF" 
            urlImage="https://media1.giphy.com/media/tjR9wKNsrXq48/100_s.gif?cid=6eb8b9c9pbfbvastrjnx96udo4qcku4mnbzdm0gpxupsmz5c&rid=100_s.gif&ct=g" 
            urlGif="https://giphy.com/gifs/jon-stewart-donald-trump-larry-wilmore-tjR9wKNsrXq48"
            /> */}

            <div className="d-flex flex-wrap">
                {gifs.map(gif => (<Gif 
                    titulo={gif.title} 
                    urlImage={gif.images.downsized_medium.url} 
                    urlGif={gif.url} 
                    key={gif.id}/>))
                }
            </div>

        </div>
    )
}

export default Home
