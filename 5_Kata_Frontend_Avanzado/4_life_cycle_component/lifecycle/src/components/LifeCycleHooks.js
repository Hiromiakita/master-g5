import React, {useEffect, useState} from 'react'

const LifeCycleHooks = ({name = 'ditto'}) => {


// 1: EJEMPLO

    // Lo podemos tomar como el componentDidMount
    // useEffect(() => {
    //    console.log('Se monto el componente') 
    // })



// 2:EJEMPLO:

// const [count, setCount] = useState(0)

// useEffect(() => {
//     // Lo podemos tomar como un componentDidMount y un componentDidUpdate
//     console.log(`Has hecho click ${count} veces`)
    
// })

//     return (
//         <div>
//             <span>el contador esta a {count}</span>
//             <button onClick={()=>setCount(count+1)}>Incrementar contador</button>
//         </div>
//     )



// 3:EJEMPLO

// const [width, setWidth] = useState(0)

// useEffect(() => {

//     // Lo podemos tomar como un componentDidmount, un componentDidUpdate y un componentWillUnmount

//     const updateWidth =()=>{
//         const dinamicWidth = document.body.clientWidth
//         console.log(`UpdateWidth con ${width}`)
//         setWidth(dinamicWidth)
//     }
//     // Actualizamos el width del la ventana cuando el componente se monte
//     updateWidth()

//     // Nos suscribimos al evento resize window
//     window.addEventListener('resize', updateWidth)

//     // Limpiamos o saneamos el UseEffect, des-suscribiendonos del evento resize
//     return()=>{
//         window.removeEventListener('resize', updateWidth)
//     }

// })

// return(
//     <div>
//         <span>{width}</span>
//     </div>
// )


// 4:EJEMPLO

// const [pokemonInfo, setPokemonInfo] = useState(null)
// const [error, setError] = useState(null)

// useEffect(() => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//   .then(res=>setPokemonInfo(res.json()))
//   console.log(pokemonInfo)
//   }, [name])

const [user, setUser] = useState('Juan')
useEffect(() => {
   console.log(user)
}, [user])

const HandleName =(event)=>{
setUser(event.target.value)
}


return (
    // <span>
    //     {/* {`El id del pokemon es ${pokemonInfo.id} y el nombre es ${pokemonInfo.name}`} */}
        
    // </span>

    <form>
        <h1>Hello {user}</h1>
        <input type="text" onChange={HandleName}></input>
    </form>

)

}

export default LifeCycleHooks
