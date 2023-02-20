import React from 'react'
import { Link } from 'react-router-dom'
import not from '../../images/bell.png'
import cart from '../../images/cart.png'

import './Header.css'

function Header() {
  return (
    <div className='header'>
        <Link to={'/'}>
          <div className="logo"></div>
        </Link>
        <div>
          
            <small>FoodJoint</small>
        </div>
        <div className="icons">
            <img src={not} alt="" />
            <Link to={'/cart'}>
              <img src={cart} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Header