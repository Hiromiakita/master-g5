

import React, { Component } from 'react'
import Example from './Example'

export class LifeCycleClases extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre:'Manuel',
            lastName:"Tejada"
        }
    }
componentDidMount(){
    setTimeout(()=>{
        {this.setState({nombre:'Miguel'})}
    },2000)
    console.log('El componente se ha montado')
   
}

componentDidUpdate(){
    console.log('El coponenente se ha actualizado')
}

componentWillUnmount(){
    console.log('El coponenente se ha desmontado')
}

    render() {
        return (
            <div>
            {this.state.nombre == 'Miguel'  && null}    
            </div>
        )
    }
}



export default LifeCycleClases
