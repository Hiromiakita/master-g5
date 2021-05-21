// imports

// import Personaje from './Personaje.js';
import Characters from './Characters'
import Input from './Input'

const Contenedor = () => {

    // let info = [
    //     {   nombre: 'p1',
    //         subtitulo: 'sub1',
    //         descripcion: 'descrp1'
    //     },
    //     {   nombre: 'p2',
    //         subtitulo: 'sub2',
    //         descripcion: 'descrp2'
    //     },
    //     {   nombre: 'p3',
    //         subtitulo: 'sub3',
    //         descripcion: 'descrp3'
    //     },
    //     {   nombre: 'p4',
    //         subtitulo: 'sub4',
    //         descripcion: 'descrp4'
    //     },
    //     {   nombre: 'p5',
    //         subtitulo: 'sub5',
    //         descripcion: 'descrp5'
    //     },
    //     {   nombre: 'p6',
    //         subtitulo: 'sub6',
    //         descripcion: 'descrp6'
    //     },
    //     {   nombre: 'p7',
    //         subtitulo: 'sub7',
    //         descripcion: 'descrp7'
    //     },
    //     {   nombre: 'p8',
    //         subtitulo: 'sub8',
    //         descripcion: 'descrp8'
    //     },
    // ];

    // console.log(info);

    // Variables para enviar como props
    // let t3 = "titulo guardado en una variable";
    // let s3 = "subtitulo guardado en una variable";
    // let d3 = "descripción guardada en una variable";
    // let num = 100;
    // let num1 = 200;
    // let num2 = 400;

    // let mostrarMensaje = () => {
    //     console.log("función creada desde el componente padre");
    // }

    // let numeros = [1, 2, 5, 6, 6];

    return (
        <div>
            <p>Listado de personajes</p>

            <section className="d-flex flex-wrap">

                {/* Crear componentes a mano y enviarles props */}
                {/* <Personaje 
                    titulo="Titulo desde el padre" 
                    subtitulo="subtitulo desde el padre" 
                    descripcion="soy la descripción desde el padre" 
                    numero={num1} action={mostrarMensaje} 
                    edades={numeros}>
                </Personaje>
                <Personaje 
                    titulo="Titulo 2 desde el padre" 
                    subtitulo="subtitulo 2 desde el padre" 
                    descripcion="soy la descripción 2 desde el padre"
                    numero={num2}>
                </Personaje>
                <Personaje 
                    titulo={t3} 
                    subtitulo={s3} 
                    descripcion={d3} 
                    numero={num}>
                </Personaje> */}


                {/* Crear componentes hijos con props a partir de un arreglo con info */}

                {/* {
                    info.map((elemento, index) => {
                        return (
                            <Personaje 
                                age={25}
                                title={elemento.nombre}
                                subtitle={elemento.subtitulo}
                                description={elemento.descripcion}
                                number={100}
                                key={index}/>
                        )
                    })
                } */}

                {/* <Characters/> */}
                <Input/>
            </section>

        </div>
    )
}

export default Contenedor;
