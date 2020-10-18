import React from 'react'
import "./Header.css"
import { Link, link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
function Header() {
    const [{ basket, user }]= useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    };
    return (
        <nav className="header">
            <Link to="/">
                {/*Logo on the left->img */}
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>
            {/*3 links */}
                <div className="header__nav">
            {/*1st link */}
                <Link to={!user &&"/login" }className="header__link">
                <div onClick={login} className="header__option">

                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span  className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>

                </div>
                </Link>
            {/*2nd link */}
            <Link to="/" className="header__link">
                <div className="header__option">

                    <span className="header__optionLineOne">Returns</span>
                    <span  className="header__optionLineTwo">& Orders</span>

                </div>
                </Link>
            {/*3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">

                    <span className="header__optionLineOne">Your</span>
                    <span  className="header__optionLineTwo">Prime</span>

                </div>
                </Link>
            {/*4th link */}
                <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket header__basketCount">
                      {/*Shopping basket icon */}
                      <ShoppingBasket />
                      {/*Number of items in the basket */}
                    
                      <span>{basket?.length}</span>
                  </div>  
                </Link>


                </div>          
        </nav>
    );
}

export default Header 
