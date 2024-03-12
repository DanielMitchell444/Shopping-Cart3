import logo from './logo.svg';
import styles from '../src/App.module.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Video from '../src/Images/m2-res_1080p.mp4';
import data from './Components/Data';
import Cards from './Components/Cards'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate } from "react-router-dom"
import Shopping from './Components/Shopping';
import SearchBar from './Components/SearchBar';
import Cart from './Pages/Cart';
import CartItems from './Components/CartItems';
import Data from './Components/Data';
function App() {

  const [cardArray, setCardArray] = useState(data)
  const [search, setSearch] = useState("");
  const [filtered, setFilteredUser] = useState("")
  const [searchBar, setSearchBarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data)
  



  const addItemToCart = (product) => {

   const filteredItem = data.filter((items => items.value === product))

   setSelectedItem([...selectedItem, product]);
   console.log(product);
  }

  const removeItem = (product) => {
   setSelectedItem(selectedItem.filter(item => item.id !== product.id));
    console.log(product)
    console.log('this is clicked')
  }

  const toggleSearchbar = () => {
      setIsSearchBarOpen((isSearchBarOpen) => !isSearchBarOpen)
  }

  const closeModal = () => {

  }
  return (
    <div className="App">
    <Nav 
     toggleSearch = {toggleSearchbar}
    />
    {isSearchBarOpen &&
    <SearchBar 
    onClose = {toggleSearchbar}
    data = {Data}
    setFilteredData = {setFilteredData}
    />
    }
    <Routes>
      <Route exact path = "/" element = {<Home 
      />} />
      <Route path = "/shopping" element = {<Shopping 
      addItem = {addItemToCart}
      />} />
      <Route exact path = "/cartitem" element = {<CartItems 
       removeItem = {removeItem}
      />}
      />
      <Route exact path = "/cart" element = {<Cart
      items = {selectedItem}
      removeItem = {removeItem}
      />} />
    </Routes>
    </div>
  );
}

export default App;
