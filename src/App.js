import './App.css';
import './componentes/NavBar/Styles.css';
import NavBar from './componentes/NavBar/Index.js';
import './componentes/ItemListContainer/Styles.css';
import ItemListContaineer from './componentes/ItemListContainer/Index.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/Index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className='contenedor'>
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={ <ItemListContaineer/> } />
        <Route path='/category/:categoryId' element={<ItemListContaineer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
      </Routes>
      
      

      </BrowserRouter>
    </div>
  );
}

export default App;
