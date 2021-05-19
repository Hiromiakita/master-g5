import React, { Component } from 'react';
class ExampleProps extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
<h4>Hola, {this.props.nombre}!!! ... desde el componente ExampleProps</h4>
         );
    }
}
 
export default ExampleProps;