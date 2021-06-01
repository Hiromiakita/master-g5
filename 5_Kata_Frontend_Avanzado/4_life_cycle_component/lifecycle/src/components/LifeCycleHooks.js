import React, {useEffect, useState} from 'react'

const LifeCycleHooks = () => {

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

const [width, setWidth] = useState(0)

useEffect(() => {

    // Lo podemos tomar como un componentDidmount, un componentDidUpdate y un componentWillUnmount

    const updateWidth =()=>{
        const dinamicWidth = document.body.clientWidth
        console.log(`UpdateWidth con ${width}`)
        setWidth(dinamicWidth)
    }
    // Actualizamos el width del la ventana cuando el componente se monte
    updateWidth()

    // Nos suscribimos al evento resize window
    window.addEventListener('resize', updateWidth)

    // Limpiamos o saneamos el UseEffect, des-suscribiendonos del evento resize
    return()=>{
        window.removeEventListener('resize', updateWidth)
    }

})

return(
    <div>
        <span>{width}</span>
    </div>
)



}

export default LifeCycleHooks
