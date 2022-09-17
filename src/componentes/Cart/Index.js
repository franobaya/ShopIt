import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/Index";
import './Styles.css';
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, cartTotal, emptyCart} = useContext(CartContext)

    return(
        cart.length > 0
        ?
        <div className="cartContainer">
            <div className="cartListContainer">
            {cart.map((item) =>(
                    <div key={item.id} className="ItemInCart">
                        <CartItem item={item} key={item.id}/>
                    </div>
            ) )}
                
            </div>
            <div className="total">
            <h4 className="totaltext">Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="cartbtn">Empty Cart</button>  
            </div>


        </div>
        :
        <div className="cartContainer">
            <div className="emptycart">
            <h4 className="totaltext">Your cart is empty</h4>
            <Link to='/' className="btnadd" >Go Shop</Link>
            </div>
        </div>
    )
        
    
}

export default Cart;