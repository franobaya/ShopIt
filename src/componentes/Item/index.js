import ItemCounter from "../ItemCount";
import './Styles.css';

const Item = ({producto}) =>{

    return(
        <div className="Item">
                    <h4 className="Product">{producto.nombre}</h4>
                    <p className="Precio">Precio: ${producto.precio}</p>
                    <ItemCounter stock={producto.stock}/>
        </div>
    )
}

export default Item;