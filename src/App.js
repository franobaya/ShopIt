import './App.css';
import './componentes/NavBar/Styles.css';
import NavBar from './componentes/NavBar/Index.js';
import './componentes/ItemListContainer/Styles.css';
import ItemListContaineer from './componentes/ItemListContainer/Index.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/Index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider} from './Context/CartContext'
import Cart from './componentes/Cart/Index';


function App() {

  return (
    <div className='contenedor'>

      <BrowserRouter>

      <NavBar />
      <CartProvider >

      <Routes>
        <Route path='/' element={ <ItemListContaineer/> } />
        <Route path='/category/:categoryId' element={<ItemListContaineer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
      
      

      </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
