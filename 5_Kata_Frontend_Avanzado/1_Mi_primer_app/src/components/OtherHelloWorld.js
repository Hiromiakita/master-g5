
// UN COMPONENTE ES UNA FUNCION QUE PUEDE O NO EJECUTAR UNA LOGICA, PERO SIEMPRE DEBE DEVOLVER
//ELEMENTOS QUE SE REFLEJARAN EN LA PANTALLA

// Componente de tipo Funcional (Estos reemplazaron a los de tipo clase)


// Importamos React y los Hooks useState y useEffect que equivalen al this.state y al componentDidmount de las clases
import React, {useState, useEffect} from 'react'


 const OtherHelloWorld = () => {
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
        </div>
    )
}
// Exportamos la clase o componente para poder importarlo donde lo necesitemos
export default OtherHelloWorld;