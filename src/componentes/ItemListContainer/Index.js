import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import ItemList from "../ItemList/index.js";


const ItemListContaineer=( )=>{

    const [productos,setProductos] = useState([])
        
    useEffect(()=>{
        pedirDatos()
            .then((res)=>{
                setProductos(res)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
            })
    }, [])

    return(
        <div className="ItemListContainer">
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContaineer;