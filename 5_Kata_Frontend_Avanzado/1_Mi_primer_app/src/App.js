// importar files: estilos, imágenes, otros componentes, librerías.
import './App.css';
import img1 from './assets/imgs/sky.jpeg';


function App() {

  // Variables usadas para el return 
  let titulo = 'Hola, soy el título';
  let parr = 'SOy la descripción';
  let nombres = ['Diego', 'Julia', 'Sara'];
  let info = [
    {nombre: 'Jorge', edad: 30},
    {nombre: 'Luis', edad: 12},
    {nombre: 'Héctor', edad: 20},
    {nombre: 'Diana', edad: 50},
    {nombre: 'Ana', edad: 1}
  ]
  // let img2 = './assets/imgs/sky.jpeg';
  
  // insertamos código HTML en código Js -> necesitamos ()
  return (
    // Sólo podemos retornar UNA etiqueta
    <div className="contenedor" id="cont1">
      <h1 className="titulo">{titulo}</h1>
      <p>{parr}</p>
      {/* // Insertamos código Js en código HTML necesitamos hacerlo entre {} */}
      {/* Etiqutas de apertura y cierre para todos los tipos de etiqueta */}
      <img src={img1} alt="test" className="img"></img>
      <input type="button"></input>

      {
        nombres.map(nombreActual => {
          return (<p>{nombreActual}</p>)
        })
      }

      <section className="tarjetas-contenedor">
      {
        info.map(usuario => {
          return (
          <div className="tarjeta">
            <h1> {usuario.nombre} </h1>
            <p> {usuario.edad} </p>
          </div>)
        })
      }
      </section>
    </div>
  )
}

export default App;
