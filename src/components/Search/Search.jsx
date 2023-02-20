import React from 'react'
import './Search.css'
import ser from '../../images/search.png'

function Search() {
  return (
    <div className='search flex'>
        <img src={ser} alt="" width={20}/>
        <input type="text" placeholder='Search your food ...'/>
    </div>
  )
}

export default Search