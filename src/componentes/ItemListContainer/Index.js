import { useEffect, useState } from "react";
import ItemList from "../ItemList/index.js";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/cinfig.js";

const ItemListContaineer=( )=>{

    const [productos,setProductos] = useState([])

    const {categoryId} = useParams()
    
    const [loading, setLoading] = useState(true)
        
    useEffect(()=>{

        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where('categoria','==',categoryId) )
                    : productosRef

        
        getDocs(q)
            .then((snapshot)=>{
                const productosDB = snapshot.docs.map((doc) => ({ id: doc.id , ...doc.data() }) )
                setProductos(productosDB)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [categoryId])

    return(
        <div className="ItemListContainer">
            {
                loading 
                ? <h2 className="Loader">Loading...</h2>
                :<ItemList productos={productos}/>
            }
            
        </div>
    )
}
export default ItemListContaineer;