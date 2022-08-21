import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../Context.js';
import './Checkout.css'
import CheckoutCard from '../../components/checkoutCard/CheckoutCard.js';

const Checkout = () => {

  const { cart, setCart} = useContext(Cart);

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    let Total = 0;
    for(let i =0; i < cart.length; i++){
      Total = Total + (cart[i].price * cart[i].quantity);
    }
    setTotal(Total);
  },[cart])

  const handleRemove = (id) =>{

      let newCart = cart.filter(item => item.id !== id);
      setCart(newCart);
  }

  return (
    <div className='checkout'>
      <div className='checkout__cart'>
        {
          cart.map(product=>(
            <CheckoutCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              size={product.size}
              color={product.color}
              quantity={product.quantity}
              handleRemove={handleRemove}
            />
          ))
        }
      </div>
      <div className='checkout__pay'>
        <div className='checkout__pay-info'>
          <h1>
            Total: {total}
          </h1>
          <button>
            Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout