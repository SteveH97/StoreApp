import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Realm from 'realm-web'
import './Store.css';
import Navbar from '../src/components/navbar/Navbar.js'
import Home from '../src/containers/home/Home.js'
import Checkout from '../src/containers/checkout/Checkout.js'


function Store() {

  const [searchFilter, setSearchFilter] = useState("");

  const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProducts();
    },[]);

    const fetchProducts = async () =>{
      //save this into a local.env
      const REALM_APP_ID = process.env.REACT_APP_API_MONGO_KEY;
      const app = new Realm.App({id: REALM_APP_ID});
      const credentials = Realm.Credentials.anonymous();

      try{
          const user = await app.logIn(credentials);
          const allProducts = await user.functions.getAllProducts();
          setProducts(allProducts);
      }catch(error){
          console.log(error);
      }
    };

  return (
    <BrowserRouter>
      <div className="store">
        <Navbar setSearchFilter={setSearchFilter}/>
      </div>
      <Routes>
        <Route path='/' element={<Home searchFilter={searchFilter} products={products}/>}/> 
        <Route path='/checkout' element={<Checkout/>}/>   
      </Routes>

    </BrowserRouter>
  );
}

export default Store;
