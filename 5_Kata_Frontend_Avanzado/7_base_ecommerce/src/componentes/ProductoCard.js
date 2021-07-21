import React from 'react';
import './ProductoCard.scss';

const ProductoCard = (props) => {

    let test = () => {
        console.log('test');
    }

    let hola = () => {
        return 'hola';
    }

    const {nombreProducto, precio, imagen} = props;
    return (
        <div className="card-producto">
            <img className="prod-image" src={imagen} alt="imagen producto"/>
            <p className="nombre-producto">{nombreProducto}</p>
            <p className="precio-producto">${precio}</p>
            <a href="a">Ver detalles</a>
            <button onClick={() => {hola()} }></button>
        </div>
    )
}

export default ProductoCard;
