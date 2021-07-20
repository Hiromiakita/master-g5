import {useEffect, useState} from 'react';
import ProductoCard from '../componentes/ProductoCard';
import Search from '../componentes/Search';

import './Home.scss';

const Home = () => {

    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setproductosFiltrados] = useState([]);
    const [searchOn, setSearchOn] = useState(false);

    const getProductos = () => {
        
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(respuesta => respuesta.json())
            .then(productos => {
                // console.log('productos ANTES', productos);

                let productosCompletos = productos.map(prod => {
                    let objProducto = {};

                    objProducto = prod.image && prod.image.slice(0, 4) === 'http' ? prod : 
                        prod.images && prod.images.slice(0, 4) === 'http' ? {...prod, image: prod.images} :
                        {...prod, image: 'https://i.pinimg.com/564x/f9/9b/2e/f99b2e7cace21a55b6eafb37c569bb01.jpg'}

                    return objProducto;
                })

                console.log('productos DESPUÉS', productosCompletos);
                setProductos(productosCompletos);
                setproductosFiltrados(productosCompletos);
            });
    }

    const filtrarProductos = (busqueda) => {
        busqueda ? setSearchOn(true) : setSearchOn(false);

        console.log('Búsqueda', busqueda);

        let resultado = productos.filter(prod => 
            prod.product_name.toLowerCase().includes(busqueda.toLowerCase())
        );

        setproductosFiltrados(resultado);
        console.log('resultado', resultado);
    }

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <div className="contenedor-home">
            <h1>HOME</h1>
            <Search filtrarProductos={filtrarProductos}/>
            <h2>Productos</h2>
            <div className="contenedor-productos">
                {
                    productosFiltrados.length > 0 ? 
                        productosFiltrados.map((prod, index) => (
                            <ProductoCard 
                                nombreProducto = {prod.product_name}
                                precio = {prod.price}
                                imagen = {prod.image}
                                key={index}
                            />
                        )) : productosFiltrados.length === 0 && searchOn ? 
                        (<p>No hay resultados</p>) :
                        (<p>Cargando...</p>)
                }
            </div>
        </div>
    )
}

export default Home
