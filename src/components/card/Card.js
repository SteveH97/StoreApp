import React, { useState, useContext } from 'react'
import { Cart } from '../../Context.js'
import './Card.css'
import { GiPoloShirt } from 'react-icons/gi'

const Card = (products) => {

    const { id, name, price, fabric, category, size, color } = products;

    const [quantity, setQuantity] = useState(0);

    const { cart, setCart } = useContext(Cart);

    const handleMinus = () =>{
        if(quantity <= 0){
            setQuantity(0);
        }else{
            setQuantity(quantity-1);
        }
    }

    

    const handleCart = () =>{
        
        setQuantity(0);

        let item ={
            id: id,
            name: name,
            price: price,
            size: size,
            color: color,
            quantity: quantity
        }

        //cart is empty
        if(cart.length === 0){
            setCart(cart => [...cart, item]);
        }

        //cart has existing data
        if(cart.length > 0){
            let found = -1;

            //find if a certain item already exists in the cart
            for(let i = 0; i < cart.length; i++){
                if(cart[i].id === id){
                    found = id;
                    console.log(found);
                }
            }

            //add new item into cart if it does not exist in cart yet
            if(found === -1){
                 setCart(cart => [...cart, item]);    
            }

            //if the item does exist in cart already, then just add
            //up to the quantity
            if(found !== -1){
                for(let i = 0; i < cart.length; i++){
                    if(cart[i].id === found){
                        cart[i].quantity += quantity;
                    }
                }
            }
        }
    }

   

  return (
    <div className='card'>
        <div className='card__pic'>
            <GiPoloShirt/>
        </div>
        <hr/>
        <div className='card__info'>
            <ul>
                <li>{name}</li>
                <li>{`$ ${price}`}</li>
                <li>{fabric}</li>
                <li>{category}</li>
                <li>{size}</li>
                <li>{color}</li>
            </ul>
        </div>
        <div className='card__cart'>
            <div className='card__quantity'>
                Quantity:
                <button onClick={()=>handleMinus()}>-</button>
                {quantity}
                <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
            </div>
            <button onClick={()=>handleCart()} className='card__addToCart-button'>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Card