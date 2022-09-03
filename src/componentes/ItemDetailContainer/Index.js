import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/Index";
import './Style.css';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{

    const  [item, setItem]= useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{


        pedirDatos()
            .then((res)=>{
                setItem( res.find((prod) => prod.id === Number(itemId) ) )
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(false)
            })
            
    },[])

    return(
        <div className="ItemDetailContainer">
             {
                loading 
                ? <h2 className="Loader">Loading...</h2>
                :<ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer;