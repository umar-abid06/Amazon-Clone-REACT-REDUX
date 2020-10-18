import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left">

        
            <img className="checkout__ad"
            src="https://gos3.ibcdn.com/top-1568020025.jpg" alt=""
         />
         {basket?.length == 0 ?(
             <div>
                 <h2>Your Shopping Basket is empty</h2>
                 <p>You have no items in your basket to buy one or more items click " Add to Basket" next to the item.</p>
             </div>

         ):
         (
             <div>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
                 {basket?.map(item =>(
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                 ))}
             </div>
         )}
         </div>
         {basket.length >0 && (
             <div className="checkout__right">
            <Subtotal />
             </div>
         )}
            </div>
    );
}
export default Checkout;