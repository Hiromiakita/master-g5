import React from 'react'

const Character = (props) => {

    const {url, nombre} = props;

    const URL_IMAGE = 'https://starwars-visualguide.com/assets/img/characters/';

    const getId = (url) => {
        return url.split('/')[url.split('/').length - 2]
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <li>
                    <img style={{ width: '100%' }} src={`${URL_IMAGE + getId(url)}.jpg`} alt={'imagen'} />
                    <h3>{nombre}</h3>
                </li>
            </div>
        </div>
    )
}

export default Character
