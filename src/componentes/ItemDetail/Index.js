import { useState } from "react";
import ItemCounter from "../ItemCount";
import './Style.css';

const ItemDetail = ({item}) =>{

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        console.log("Usted compro "+cantidad+" "+item.nombre)

        
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
                <ItemCounter 
                stock={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
                />
            </div>
        </div>
    )
}

export default ItemDetail;