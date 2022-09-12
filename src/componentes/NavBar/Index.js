import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'
const NavBar=()=>{
    return(
        <header>
            <div className="BrandContainer"><Link to='/'><h3 className="Brand" alt="logo">ShopIt</h3></Link></div>
            <nav>
                <ul className="navlinks">
                    <li><Link to='/category/CellPhone'>CellPhone</Link></li>
                    <li><Link to='/category/Watch'>Watch</Link></li>
                    <li><Link to='/category/Console'>Console</Link></li>
                </ul>
            </nav>
            <Link to="/cart" className="cta" ><button className="cartbtn"><CartWidget /> Cart</button></Link>
        </header>
        

    )
}
export default NavBar;