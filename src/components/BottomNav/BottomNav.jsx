import React from 'react'
import './BottomNav.css'
import home from '../../images/home.png'
import res from '../../images/restaurant.png'
import per from '../../images/person.png'
import dishs from '../../images/spoon.png'

function BottomNav() {
  return (
    <div className='bottomNav flex'>
        <img src={home} alt="" />
        <img src={dishs} alt="" />
        <img src={res} alt="" />
        <img src={per} alt="" />
    </div>
  )
}

export default BottomNav