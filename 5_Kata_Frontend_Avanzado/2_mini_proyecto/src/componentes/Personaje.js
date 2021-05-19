const Personaje = (props) => {

    console.log(props);

    //destructuración
    let {titulo, subtitulo, numero, descripcion} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <p>{numero}</p>
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitulo}</h6>
                <p className="card-text">{descripcion}</p>
                <a href="hola" className="card-link">Card link</a>
                <a href="hola" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default Personaje
