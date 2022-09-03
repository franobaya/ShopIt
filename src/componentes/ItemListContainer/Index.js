import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import ItemList from "../ItemList/index.js";
import { useParams } from 'react-router-dom';


const ItemListContaineer=( )=>{

    const [productos,setProductos] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId)
    const [loading, setLoading] = useState(true)
        
    useEffect(()=>{

        setLoading(true)

        pedirDatos()
            .then((res)=>{
                if(!categoryId){
                    setProductos(res)
                }else{
                    setProductos(res.filter((prod)=> prod.categoria === categoryId) )
                }
            })
            .catch((err)=>{
                console.log(err)
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