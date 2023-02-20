import React from 'react'
import './BottomNav.css'
import home from '../../images/home.png'
import res from '../../images/restaurant.png'
import per from '../../images/person.png'
import dishs from '../../images/spoon.png'

function BottomNav() {
  return (
    <div className='bottomNav flex'>
        <img onClick={()=>window.location = '/'} src={home} alt="" />
        <img onClick={()=>window.location = '/'} src={dishs} alt="" />
        <img onClick={()=>window.location = '/'} src={res} alt="" />
        <img onClick={()=>window.location = '/'} src={per} alt="" />
    </div>
  )
}

export default BottomNav