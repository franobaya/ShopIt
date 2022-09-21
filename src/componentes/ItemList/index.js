import Item from "../Item/index.js";
import './Styles.css';

const ItemList = ( {productos=[]} ) => {

    return(
        <div className="ItemList">
            {productos.map((prod)=>{
            return <div key={prod.id}>
                    <Item producto={prod} />
                </div>
            })}
            </div>
    )
        
    
}

export default ItemList;