import React from 'react'

function ExamplePropsFunction({valorSuma}) {
    return (
        <div>
            <h1>{`soy un componente hijo; OtherHelloWorld es mi padre y me envio un valor por medio de props, el valor es: ${valorSuma}`}</h1>
        </div>
    )
}

export default ExamplePropsFunction
