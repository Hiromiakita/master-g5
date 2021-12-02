import './App.css';
import Navbar from './componentes/Navbar';
import Search from './componentes/Search';
import Contenedor from './componentes/Contenedor';


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Search/>
        <Contenedor/>
      </div>
      
    </div>
  );
}

export default App;
