import React from 'react'
import not from '../../images/bell.png'
import cart from '../../images/cart.png'

import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="logo"></div>
        <div><small>FoodJoint</small></div>
        <div className="icons">
            <img src={not} alt="" />
            <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default Header