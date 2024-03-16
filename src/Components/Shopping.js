import React from "react";
import Data from "./Data";
import Cards from "./Cards";
import styles from '../App.module.css'
const Shopping = ({addItem, data}) => {
 return(
  <div className= {styles.cardContainer}>
   <h1></h1>
  {data.map(data => {
  return <Cards 
  key = {data.id}
  price = {data.price}
  image = {data.image}
  title = {data.title}
  value = {data.value}
  onClick = {() => addItem(data)}
  />

  })}

  </div>
 )
}

export default Shopping