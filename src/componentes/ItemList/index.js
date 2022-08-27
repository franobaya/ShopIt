import Item from "../Item/index.js";
import './Styles.css';

const ItemList = ( {productos=[]} ) => {

    return(
        <div className="ItemList">
            {productos.map((prod)=>{
            return <div>
                    <Item producto={prod} key={prod.id}/>
                </div>
            })}
            </div>
    )
        
    
}

export default ItemList;