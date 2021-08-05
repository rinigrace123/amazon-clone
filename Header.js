import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";


function Header() {
   const [{ basket }, dispatch] = useStateValue();

   console.log(basket);
   return (
       <nav className="header"> 
           {/* logo on the left*/} 
           <Link to="/">
              <img  className="header_logo"src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="amazon-logo-6" />
           </Link>
           {/* search box*/}
           <div className="header__search">
              <input type="text" className="header__searchInput"/>
              <SearchIcon className="header__searchIcon"/>
           </div>
           {/*3links*/}
           <div className="headerNav">
               {/* 1st link*/}
               <Link to="/login" className="header__link">
                  <div className="header__option">
                     <span class="header_optionLineOne">Hello</span>
                     <span class="header_optionLineTwo">SignIn</span>
                  </div>
               </Link>
               {/* 2nd link*/}
               <Link to="/" className="header__link">
                  <div className="header__option">
                     <span class="header_optionLineOne">Returns</span>
                     <span class="header_optionLineTwo"> & Orders</span>
                  </div>
               </Link>
               {/* 3rd link*/}
               <Link to="/" className="header__link">
                  <div className="header__option">
                     <span class="header_optionLineOne">Your</span>
                     <span class="header_optionLineTwo">Prime</span>
                  </div>
               </Link>
               {/* 4th link*/} 
               <Link to="/checkout" className="header__link">
                <div className="header_optionBasket">
                   {/*Shopping basket icon*/}
                    <ShoppingBasketIcon />
                    {/*Number of icons in the basket*/}
                   <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
                </div>
               </Link>
           </div>
           {/* Basket icons */}     
       </nav>
    );
}

export default Header
