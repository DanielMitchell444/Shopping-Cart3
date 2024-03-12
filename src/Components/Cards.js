import React from "react";
import styles from '../App.module.css'

const Cards = ({price, image, name, value, onClick}) => {
 return(
 
<div 
className = {styles.content}
>
 <div className= {styles.card}
 value = {name}
 >

  <img className= {styles.image} src = {image}
  

  /> 
  <h1>{name}</h1>
  <h2>{price}</h2>
  <button
  value = {value}
  onClick={onClick}
  >Add to Cart</button>
 </div>
 </div>
 )
}

export default Cards