import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/Index";
import './Style.css';
import { useParams } from 'react-router-dom'
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/cinfig";

const ItemDetailContainer = () =>{

    const  [item, setItem]= useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)


        const docRef= doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc)=>{
                setItem({id: doc.id, ...doc.data()})
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