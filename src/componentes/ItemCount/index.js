import './Styles.css';


const ItemCounter =({stock, counter, setCounter, handleAgregar})=>{
    
    
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

    

    return(
        
            stock > 0
            ?<div className="Itemcounter">
                
            <h3 className='stock'>Stock Max {stock}</h3>
            <div className="Counter">
                <button onClick={restar} className={`${counter == 1 ?'btncounteri':'btncounter' }`}>-</button>
                <span className="cantidad">{counter}</span>
                <button onClick={sumar} className={`${counter == stock ?'btncounteri':'btncounter' }`}>+</button>
            </div>
            <button onClick={handleAgregar} className='btnadd'>Add To Cart</button>
            </div>
            :<button className='btnadd'>Sold Out</button>
        
        
    )
}
export default ItemCounter;