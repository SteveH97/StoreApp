import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../../Context.js'
import './Navbar.css'
import {BiSearchAlt, BiMenu, BiX} from 'react-icons/bi'
import { Badge } from "@mui/material";

const Navbar = ({ setSearchFilter }) => {

  const [toggle, setToggle] = useState(false);
  const [inputText, setInputText] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(Cart);

  useEffect(()=>{
    let totalItems = 0;
    for(let i = 0; i < cart.length;i++){
      totalItems += cart[i].quantity;
    }
    setCartCount(totalItems);
  },[cart]);

  const inputTextHandler = (e) =>{
    setInputText(e.target.value);
    console.log(inputText);
  }

  const submitSearchHandler = (e) => {
    e.preventDefault();
    setSearchFilter(inputText);
    setInputText("");
    setInputText("");
  }

  return (
    <nav className='navbar'>
      <h1><Link to='/'>EStore</Link></h1>
      <div className='navbar__search'>
        <input
           type="text" 
           placeholder="Sweater..."
           onChange={inputTextHandler}   
        />
        <button
          onClick={submitSearchHandler}
          type='submit'
        >
          <BiSearchAlt/>
        </button>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>
          <Badge badgeContent={cartCount} sx={{color: 'black'}}>
            <Link to='/checkout'>Checkout</Link>
          </Badge>
        </li>
      </ul>

      <div className='navbar__menu'>
        <BiMenu onClick={() => setToggle(true)}/>

        {toggle && (
          <>
            <BiX onClick={()=>setToggle(false)}/>
            <ul>
            <li><a href='home'>Home</a></li>
            <li><a href='checkout'>Checkout</a></li>
            </ul>
          </>  
          )}

      </div>

    </nav>
  )
}

export default Navbar