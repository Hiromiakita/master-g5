import React from 'react';
import './ProductoCard.css';

const ProductoCard = (props) => {

    const {nombreProducto, precio, imagen} = props;
    return (
        <div>
            <img className="prod-image" src={imagen}/>
            <p>{nombreProducto}</p>
            <p>${precio}</p>
        </div>
    )
}

export default ProductoCard
