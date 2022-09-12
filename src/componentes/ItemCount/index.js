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
        <div className="Itemcounter">
                <h3 className='stock'>Stock Max {stock}</h3>
                <div className="Counter">
                    <button onClick={restar} className="btncounter">-</button>
                    <span className="cantidad">{counter}</span>
                    <button onClick={sumar} className="btncounter">+</button>
                </div>
                <button onClick={handleAgregar} className='btnadd'>Add To Cart</button>
        </div>
    )
}
export default ItemCounter;