import React from 'react'

const Search = (props) => {
    
    const {filtrarProductos} = props;

    return (
        <div>
            <input onChange={(e) => {filtrarProductos(e.target.value)}} placeholder="Buscar productos"/>
            <button>Buscar</button>
        </div>
    )
}

export default Search
