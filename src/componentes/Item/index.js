import './Styles.css';
import { Link } from 'react-router-dom'

const Item = ({producto}) =>{

    return(
        <div className="Item">
                    <h4 className="Product">{producto.nombre}</h4>
                    <img className="itemImg" alt="imagen" src={producto.img}></img>
                    <p className="Precio">Precio: ${producto.precio}</p>
                    {
                        producto.stock > 0
                        ?<Link to={`/item/${producto.id}`} className='btnadd'>See More</Link>
                        : <button className='btnadd roji'>Sold Out</button>
                    }
        </div>
    )
}

export default Item;