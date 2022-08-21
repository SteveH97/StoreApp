import React from 'react'
import './CheckoutCard.css'

const CheckoutCard = (products) => {

    const { id, name, price, size, color, quantity, handleRemove} = products;

  return (
    <div className='checkoutCard'>
      
      <div className='checkoutCard__info'>
        <ul>
          <li>{name}</li>
          <li>{`Price: ${price}`}</li>
          <li>{`Quantity: ${quantity}`}</li>
          <li>{`Size: ${size}`}</li>
          <li>{`Color: ${color}`}</li>
        </ul>
      </div>
      <div className='checkoutCard__total-item'>
          {`Total: $${price*quantity}`}
          <button onClick={()=>handleRemove(id)}>Remove</button>
      </div>

    </div>
  )
}

export default CheckoutCard