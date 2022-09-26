import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCounter from "../ItemCount";
import './Style.css';

const ItemDetail = ({item}) =>{

    const { cart, addToCart, isInCart } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        const itemToCart ={
            id:item.id,
            precio:item.precio,
            nombre:item.nombre,
            cantidad
        }

        addToCart(itemToCart)
    }

    if(item===undefined){
        return <div></div>
    }
   
    return(
        <div className="cont">
            <div className="ItemDetail">
                <h4 className="Product">{item.nombre}</h4>
                <img className="img" alt="imagen" src={item.img}></img>
                <p className="Precio">Precio: ${item.precio}</p>
            </div>
            <div className="ItemDetail2">
                <p className="txt">{item.descrip} </p>

                {
                    isInCart(item.id)
                    ? <Link to="/cart" className="btnadd">Terminar mi compra</Link>
                    :  
                        <ItemCounter 
                        stock={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                        />
                        
                        
                        
                    
                    
                }

                
                
            </div>
        </div>
    )
}

export default ItemDetail;