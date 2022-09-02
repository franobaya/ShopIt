import { useState } from 'react';
import './Styles.css';
const ItemCounter =({stock})=>{
    
    const [counter, setCounter] = useState(1)

    const sumar = () =>{
        if (counter < stock ){
            setCounter( counter+1 )
        }   
    }
    
    const restar = () =>{
        if (counter > 1 ){
            setCounter( counter-1 )
        }
    }

    const add = () =>{
        if (counter > stock ){
            console.log("Solo tenemos "+ stock+ " en stock de este articulo")
        }else{console.log("Usted compro "+counter +" articulos")}

        
    }

    return(
        <div className="Itemcounter">
                <h3 className='stock'>Stock Max {stock}</h3>
                <div className="Counter">
                    <button onClick={restar} className="btncounter">-</button>
                    <span className="cantidad">{counter}</span>
                    <button onClick={sumar} className="btncounter">+</button>
                </div>
                <button onClick={add} className='btnadd'>Add To Cart</button>
        </div>
    )
}
export default ItemCounter;