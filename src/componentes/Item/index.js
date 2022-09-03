import './Styles.css';
import { Link } from 'react-router-dom'

const Item = ({producto}) =>{

    return(
        <div className="Item">
                    <h4 className="Product">{producto.nombre}</h4>
                    <p className="Precio">Precio: ${producto.precio}</p>
                    <p className="Stock">Stock: {producto.stock}</p>
                    <Link to={`/item/${producto.id}`} className='btnadd'>See More</Link>
        </div>
    )
}

export default Item;