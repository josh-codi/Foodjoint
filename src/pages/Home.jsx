import React from 'react'
import Banner from '../components/Banner/Banner'
import PopularFood from '../components/PopularFood/PopularFood'
import Search from '../components/Search/Search'

function Home() {
  return (
    <div className='home v-flex'>
        <Banner />
        <Search />
        <PopularFood />
    </div>
  )
}

export default Home