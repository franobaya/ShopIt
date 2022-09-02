import './Styles.css';

const Item = ({producto}) =>{

    return(
        <div className="Item">
                    <h4 className="Product">{producto.nombre}</h4>
                    <p className="Precio">Precio: ${producto.precio}</p>
                    <p className="Stock">Stock: {producto.stock}</p>
                    <button className='btnadd'>See More</button>
        </div>
    )
}

export default Item;