import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/Index";
import './Styles.css';

const Cart = () => {

    const {cart, cartTotal, emptyCart} = useContext(CartContext)

    return(
        <div className="cartContainer">
            <div className="cartListContainer">
            {cart.map((item) =>(
                    <div key={item.id} className="Item">
                        <CartItem item={item} key={item.id}/>
                    </div>
            ) )}
                
            </div>
            <div className="total">
            <h4 className="totaltext">Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="cartbtn">Empty Cart</button>  
            </div>


        </div>
    )
        
    
}

export default Cart;