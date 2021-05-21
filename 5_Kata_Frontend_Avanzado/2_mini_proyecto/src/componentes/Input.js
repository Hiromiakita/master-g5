import React, {useEffect, useState} from 'react'

const Input = props => {
    const [user, setUser] = useState('')

    const handleText =(event)=>{
       setUser(event.target.value)
    }

    useEffect(()=>{
        console.log(user)
    }, [user])

    return (
        <form>
            <h1>Hola {user}</h1>
            <input type='text' onChange={handleText}>

            </input>
        </form>
    )
}

export default Input
