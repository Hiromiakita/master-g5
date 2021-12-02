import React from 'react'

const Search = (props) => {

    let {getGifs, saludo} = props;

    // const mostrarMensaje = (evento) => {
    //     //evento -> contiene toda la info de la etiquta input
    //     // console.log(evento.target.value);
    //     getGifs(evento.target.value);
    // }

    return (
        <nav className="navbar navbar-light bg-light">
            <form className="container-fluid">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Buscar GIF</span>
                    <input onChange={(evento) => {getGifs(evento.target.value)}} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </form>
        </nav>
    )
}

export default Search
