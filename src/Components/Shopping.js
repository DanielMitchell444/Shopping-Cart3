import React from "react";
import Data from "./Data";
import Cards from "./Cards";
import styles from '../App.module.css'
const Shopping = ({addItem}) => {
 return(
  <div className= {styles.cardContainer}>
   <h1></h1>
  {Data.map(data => {
  return <Cards 
  key = {data.id}
  price = {data.price}
  image = {data.image}
  name = {data.name}
  value = {data.value}
  onClick = {() => addItem(data)}
  />

  })}

  </div>
 )
}

export default Shopping