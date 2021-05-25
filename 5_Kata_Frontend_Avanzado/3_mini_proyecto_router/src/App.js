import Navbar from "./componentes/Navbar";
import Contacto from "./sections/Contacto";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./sections/Home";

function App() {
  return (
    // BrowserRouter nos ayuda a establecer un componente como la raíz de diferentes rutas
    <BrowserRouter>
    {/* Componentes fijos */}
      <Navbar/>
      <h1>APP Gifs</h1>

      {/* Switch encapsula los componentes o secciones que estarán cambiando de acuerdo a la ruta */}
      <Switch>
        {/* Definir un componente por ruta */}
        <Route exact path= "/contacto" component={Contacto}/>

        {/* Definir un componente por ruta */}
        <Route exact path="/home" component={Home}/>

      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
