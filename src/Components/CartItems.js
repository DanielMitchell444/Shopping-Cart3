import React from "react";
import styles from '../App.module.css'
const CartItems = (props) => {
 return(
 <div className= {styles.content}>
  <div className= {styles.card}>
    <img src = {props.image} className= {styles.image} />
     <h2>{props.name}</h2>
     <p>{props.price}</p>
     <p>{props.id}</p>
     <button
     onClick={props.removeItem}
     data-value = {props.id}
     >Remove Item</button>
  </div>
 </div>
 )
}

export default CartItems
