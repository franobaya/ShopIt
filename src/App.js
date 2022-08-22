import './App.css';
import './componentes/NavBar.css';
import NavBar from './componentes/NavBar.js';
import './componentes/ItemListContainer.css';
import ItemListContaineer from './componentes/ItemListContainer.js';

function App() {
  return (
    <div className='contenedor'>
      <NavBar />
      <ItemListContaineer texto="Proximamente Articulos"/>
    </div>
  );
}

export default App;
