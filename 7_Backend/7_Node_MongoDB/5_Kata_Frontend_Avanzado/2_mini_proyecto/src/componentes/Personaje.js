const Personaje = (props) => {


    console.log(props);

    //destructuración
    let {title, subtitle, number, description} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <p>{number}</p>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{description}</p>
                <a href="hola" className="card-link">Card link</a>
                <a href="hola" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default Personaje
