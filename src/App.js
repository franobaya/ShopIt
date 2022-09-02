import './App.css';
import './componentes/NavBar/Styles.css';
import NavBar from './componentes/NavBar/Index.js';
import './componentes/ItemListContainer/Styles.css';
import ItemListContaineer from './componentes/ItemListContainer/Index.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/Index';

function App() {
  return (
    <div className='contenedor'>
      <NavBar />
      
      <ItemDetailContainer idProducto={1}/>

      <ItemListContaineer/>
    </div>
  );
}

export default App;
