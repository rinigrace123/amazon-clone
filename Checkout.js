import React from "react";
import { useStateValue } from "./StateProvider";

function Checkout(){
     const [{ basket }] = useStateValue();
    return (

     <div className="checkout">
          <img 
             className="checkout_add"
             src="https://www.yayindia.com/sites/default/files/styles/featured/public/post/images/2020/07/17/amazon_slashes_prime_membership_price_bank_holiday_sale_thumb800_1.jpg?itok=stXBAC67"
             alt=""
          />

     </div>
    );

}

export default Checkout;