import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import LogoWhite from '../assets/images/logo-white.png'
import MobileLogoWhite from '../assets/images/logo-white.png'
import SearchIcon from '../assets/images/search-icon.png'
import CartIcon from '../assets/images/cart-icon.png'

import './Header.css'
import { useState } from 'react'

export function Header( {cart} ) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    let totalQuantity = 0;

    cart.forEach(carItem => {
        totalQuantity += carItem.quantity;
    });

    const updateSearchInput = (event) => {
        setSearch(event.target.value)
    }

    const searchItem = async () => {
        navigate(`/?search=${search}`)
    }

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={LogoWhite} />
                    <img className="mobile-logo"
                        src={MobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search"
                    value={search} onChange={updateSearchInput}
                />
                <button className="search-button" onClick={searchItem}>
                    <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}