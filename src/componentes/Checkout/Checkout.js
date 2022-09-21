import { useState } from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './Styles.css';
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/cinfig"

const Checkout = () => {

    const { cart, cartTotal, terminarCompraConSwal } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        apellido: '',
        postal:'',
        ciudad:'',
        calle:'',
        descrip:'',
        celu:'',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        

        const ordenesRef = collection(db, 'ordenes')

        

         addDoc(ordenesRef, orden)
             .then((doc) => {
                 console.log(doc.id)
                 terminarCompraConSwal(doc.id)
                 setOrderId(doc.id)
                 
             })
    }

    if (orderId) {
        return (
            <div className="compraexitosa">
                <div className="contcompra">
                <h2>Successful Purchase!</h2>
                <p>Important! Save your order number please</p>
                <p>Order number: <strong>{orderId}</strong></p>
                <Link to='/' className="cartbtn">Go Shop!</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="contenedorcheck">
            <div className="checkout-box">
                <h2>Checkout</h2>
                

                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            required
                            name="nombre"
                            onChange={handleInputChange}
                            value={values.nombre}
                            type={'text'}  
                        />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="apellido"
                            required
                            onChange={handleInputChange}
                            value={values.apellido}
                            type={'text'}  
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="celu"
                            required
                            onChange={handleInputChange}
                            value={values.celu}
                            type={'text'}  
                        />
                        <label>Cellphone</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="email"
                            required
                            onChange={handleInputChange}
                            value={values.email}
                            type={'email'}   
                        />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="postal"
                            required
                            onChange={handleInputChange}
                            value={values.postal}
                            type={'text'}  
                        />
                        <label>Zip Code</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="ciudad"
                            required
                            onChange={handleInputChange}
                            value={values.ciudad}
                            type={'text'}  
                        />
                        <label>City</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="calle"
                            required
                            onChange={handleInputChange}
                            value={values.calle}
                            type={'text'}  
                        />
                        <label>Street</label>
                    </div>
                    <div className="user-box">
                        <input 
                            name="descrip"
                            required
                            onChange={handleInputChange}
                            value={values.descrip}
                            type={'text'}  
                        />
                        <label>Description</label>
                    </div>

                    <button type="submit" className="btn_submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>

            </div>
        </div>
        
    )
}

export default Checkout