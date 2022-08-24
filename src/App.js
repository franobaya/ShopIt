import './App.css';
import './componentes/NavBar/Styles.css';
import NavBar from './componentes/NavBar/Index.js';
import './componentes/ItemListContainer/Styles.css';
import ItemListContaineer from './componentes/ItemListContainer/Index.js';

function App() {
  return (
    <div className='contenedor'>
      <NavBar />
      <ItemListContaineer />
    </div>
  );
}

export default App;
