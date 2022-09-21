import './App.css';
import './componentes/NavBar/Styles.css';
import NavBar from './componentes/NavBar/Index.js';
import './componentes/ItemListContainer/Styles.css';
import ItemListContaineer from './componentes/ItemListContainer/Index.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/Index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider} from './Context/CartContext'
import Cart from './componentes/Cart/Index';
import Checkout from './componentes/Checkout/Checkout';


function App() {

  return (
    <div className='contenedor'>

      <BrowserRouter>

      <CartProvider >
      <NavBar />

      <Routes>
        <Route path='/' element={ <ItemListContaineer/> } />
        <Route path='/category/:categoryId' element={<ItemListContaineer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='*' element={ <Navigate to="/"/>} />
      </Routes>
      
      

      </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
