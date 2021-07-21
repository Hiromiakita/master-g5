import React from 'react';
import './ProductoCard.scss';

const ProductoCard = (props) => {

    let test = () => {
        console.log('test');
    }

    const {nombreProducto, precio, imagen} = props;
    return (
        <div className="card-producto">
            <img className="prod-image" src={imagen} alt="imagen producto"/>
            <p className="nombre-producto">{nombreProducto}</p>
            <p className="precio-producto">${precio}</p>
            <a href="a">Ver detalles</a>
        </div>
    )
}

export default ProductoCard;
