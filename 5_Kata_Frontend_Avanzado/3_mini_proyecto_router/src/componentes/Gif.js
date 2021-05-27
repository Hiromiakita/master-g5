import React from 'react'

const Gif = (props) => {

    let {titulo, urlImage, urlGif} = props;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={urlImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <a href={urlGif} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Gif
