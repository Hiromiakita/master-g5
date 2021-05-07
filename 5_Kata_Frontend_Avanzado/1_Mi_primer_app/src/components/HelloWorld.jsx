

// UN COMPONENTE ES UNA FUNCION QUE PUEDE O NO EJECUTAR UNA LOGICA, PERO SIEMPRE DEBE DEVOLVER
//ELEMENTOS QUE SE REFLEJARAN EN LA PANTALLA

// Componente de tipo Clase (Ya no se recomienda utilizarlos)

// Siempre debemos importar React y destructurar Component para poder utilizar la clase como un componente
import React, {Component} from 'react'
class HelloWorld  extends Component {
    // Como mi componente helloworld hereda de COMPONENT, debo utilizar SUPER para poder pasar propiedades (props) entre componentes y entregarselos al constructor
    constructor(props) {
        super(props);

        // El ESTADO Es un valor de cualquier tipo que puede tener un valor por defecto y se puede actualizar cuantas veces lo requiramos
        // En el objeto state podemos definir varios estados a la vez
        this.state = { 
            texto: 'Hola desde el componente CLASE', //Estado por defecto
            edad:0 //Estado por defecto
         }
    }

    // Accion que se realiza cuando el componente se ha renderizado y montado en el DOM
    componentDidMount(){
        console.log('Se monto el componente clase')
        setTimeout(()=>{
            this.setState(
                {
                    texto:'Se actualizo el estado del componente tipo clase'
                }
            )
        },3000)
    }

    // El render retorna los elementos que se veran reflejados en pantalla
    render() { 
        return ( 
 <div>
<h1>Componente de tipo Clase</h1>

{/* Accedemos al estado "texto" del objeto state */}
<h2>{this.state.texto}</h2>
</div>
         );
    }
}
 
// Exportamos la clase o componente para poder importarlo donde lo necesitemos
export default HelloWorld;
