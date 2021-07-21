import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './secciones/Home';
import About from './secciones/About';
import Carrito from './secciones/Carrito';
import Login from './secciones/Login';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/carrito" component={Carrito}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/test" component={Login}></Route>
        <Route exact path="/test-hiromi" component={Login}></Route>
        <Route exact path="/*" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
