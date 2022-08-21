import React, { useState, useEffect } from 'react'
import './Home.css'
import Filters from '../../components/filter/Filters.js'
import Card from '../../components/card/Card.js'

const Home = ({ searchFilter, products }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
      setFilteredProducts(products);      
    },[products]);

    useEffect(()=>{
      textSearch();
    },[searchFilter]);


    const textSearch = () =>{
      const tempfilter = products.filter((val)=>{
        if(searchFilter === ""){
          return val;
        } else if(val.name.toLowerCase().includes(searchFilter.toLowerCase())){
          return val;
        }
      })
      setFilteredProducts(tempfilter);
    }

  return (
    <div className='home'>
      <div className='home__filter'>
       <Filters setFilteredProducts={setFilteredProducts} products={products}/>
      </div>
      
      <div className='home__products'>
        {
          filteredProducts
          .map(product=>(
            <Card 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              fabric={product.fabric}
              category={product.category}
              size={product.size}
              color={product.color}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home