import { createContext, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider  = ({children}) =>{

    
  const[cart, setCart] =  useState(init)

  const addToCart = (item)  => { 
    setCart([...cart, item])
  }

  const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
  }

  const isInCart = (id) =>{
    return cart.some((item)=> item.id===id)
  } 

  const cartTotal = ()=>{
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const emptyCart = () =>{
    if (cart.length !=0){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, clean it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
              Swal.fire(
                'Cleaned!',
                'Your cart is empty now.',
                'success'
              )
            }
          })
    }
    
    
  }
  
  useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(cart))
  },[cart])

    return(
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartTotal,
            emptyCart,
            removeItem
          } }>
            {children}
        </CartContext.Provider>
    )
}