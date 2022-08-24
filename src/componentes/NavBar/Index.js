import CartWidget from "./CartWidget";
const NavBar=()=>{
    return(
        <header>
            <h3 className="Brand" alt="logo">ShopIt</h3>
            <nav>
                <ul className="navlinks">
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Sales</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button className="cartbtn"><CartWidget /> Cart</button></a>
        </header>
        

    )
}
export default NavBar;