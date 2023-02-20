import React from 'react'
import data from '../../sampleData'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="bannerInner">
            <img src={data[5].image} alt="" className='img-fit'/>
            <div style={{position: 'absolute', width: '100%', height:'100%', background: 'rgba(0,0,0,.5)', top: '0', right: '0', padding: '2rem 0 0 2rem'}}>
                <h5>Get Special Discount</h5>
                <h1>Up to 50%</h1>
                <button className="btn btn-outline-light">Claim Voucher</button>
            </div>
        </div>
    </div>
  )
}

export default Banner