
// UN COMPONENTE ES UNA FUNCION QUE PUEDE O NO EJECUTAR UNA LOGICA, PERO SIEMPRE DEBE DEVOLVER
//ELEMENTOS QUE SE REFLEJARAN EN LA PANTALLA

// Componente de tipo Funcional (Estos reemplazaron a los de tipo clase)



// Importamos React y los Hooks useState y useEffect que equivalen al this.state y al componentDidmount de las clases
import React, {useState, useEffect} from 'react'
import ExamplePropsFunction from './ExamplePropsfunction'




//LOS PROPS SE PUEDEN LLAMAR DE TRES MANERAS: 

//1. UTILIZAR LA PALABRA PROPS EN LOS PARENTESIS DEL COMPONETE
//const OtherHelloWorld = (props) => {
//     return (
//         <div>
//            <h1>{props.name}</h1>
//
//         </div>
//     )
// }

//2. UTILIZAR LA DESTRUCTURACION
//const OtherHelloWorld = (props) => {
//const {name} =  props
//     return (
//         <div>
//            <h1>{name}</h1>
//
//         </div>
//     )
// }

//3. UTILIZAR DIRECTAMENTE LA DESTRUCTURACION EN LOS PARENTESIS
//const OtherHelloWorld = ({name}) => {
//     return (
//         <div>
//            <h1>{name}</h1>
//
//         </div>
//     )
// }


 const OtherHelloWorld = ({lastName, numero, booleano, state, objeto, saludo}) => {

    let suma = 10+10

    //Destructuracion
    // const {lastName} = props

     // El ESTADO Es un valor de cualquier tipo que puede tener un valor por defecto y se puede actualizar cuantas veces lo requiramos
     //Aqui podemos agregar cuantos queramos
    const [texto, setTexto] = useState('Hola desde el componente FUNCIONAL'); //Valor por defecto
    const [edad, setEdad] = useState(0); //Valor por defecto

    // Accion que se realiza cuando el componente se ha renderizado y montado en el DOM
    useEffect(() => {
        console.log('Se monto el componente funcional')
        setTimeout(()=>{
            setTexto('Se actualizo el estado del componente tipo funcional')
        }, 5000)
        
    }, [])

    // Retorna los elementos que se veran reflejados en pantalla
    return (
        <div>
           <h1>Componente de tipo Funcional</h1>
           <h2>{texto}</h2>
           <h3>{`${lastName} ${numero}, ${state} ${booleano}`}</h3>
           <button onClick={saludo}>Click</button>
           <ExamplePropsFunction valorSuma={suma}/>
        </div>
    )
}
// Exportamos la clase o componente para poder importarlo donde lo necesitemos
export default OtherHelloWorld;