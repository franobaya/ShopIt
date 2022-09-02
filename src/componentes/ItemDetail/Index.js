import ItemCounter from "../ItemCount";
import './Style.css';

const ItemDetail = ({item}) =>{
    if(item===undefined){
        return <div></div>
    }
    console.log(item.img)
    return(
        <div className="cont">
            <div className="ItemDetail">
                <h4 className="Product">{item.nombre}</h4>
                <img className="img" alt="imagen" src={item.img}></img>
                <p className="Precio">Precio: ${item.precio}</p>
            </div>
            <div className="ItemDetail2">
                <p className="txt">{item.descrip} </p>
                <ItemCounter stock={item.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;