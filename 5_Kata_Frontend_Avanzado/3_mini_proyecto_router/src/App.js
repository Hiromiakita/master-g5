import Navbar from "./componentes/Navbar";
import Contacto from "./sections/Contacto";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./sections/Home";
import Footer from "./componentes/Footer";
import Galeria from "./sections/Galeria";

function App() {
  return (
    // BrowserRouter nos ayuda a establecer un componente como la raíz de diferentes rutas
    <Router>
    {/* Componentes fijos */}
      <Navbar/>
      <h1>APP Gifs</h1>

      {/* Switch encapsula los componentes o secciones que estarán cambiando de acuerdo a la ruta */}
      <Switch>
        {/* Definir un componente por ruta */}
        <Route exact path= "/contacto" component={Contacto}/>

        {/* Definir un componente por ruta */}
        <Route exact path="/home" component={Home}/>

        {/* Definir un componente por ruta */}
        <Route exact path="/galeria" component={Galeria}/>

      </Switch>


    <Footer/>
    </Router>
    
  );
}

export default App;
