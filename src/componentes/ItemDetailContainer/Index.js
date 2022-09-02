import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/Index";
import './Style.css';

const ItemDetailContainer = ({idProducto}) =>{
    const  [item, setItem]= useState({})
    console.log(item)
    useEffect(()=>{
        pedirDatos()
            .then((res)=>{
                console.log(res)
                let aux = res.find((item)=>
                     item.id===idProducto
                )
                setItem(aux)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    },[idProducto])
    console.log(item)
    return(
        <div className="ItemDetailContainer">
              <ItemDetail item={item}/>      
        </div>
    )
}

export default ItemDetailContainer;