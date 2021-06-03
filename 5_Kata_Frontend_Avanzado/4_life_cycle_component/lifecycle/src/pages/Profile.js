import React from 'react'
import {useParams} from 'react-router-dom'

function Profile () {

   let {name} = useParams()
    return (
        <div>
         <h1>Perfil</h1>   
         <h2>Este es el perfil de {name} </h2>
        </div>
    )
}

export default Profile
