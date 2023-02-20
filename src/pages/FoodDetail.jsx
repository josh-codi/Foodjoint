import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'
import './detail.css'
import {setCart} from '../AddToCart'

function FoodDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const [data, setdata] = useState(location.state?.food ?? '')
    useEffect(()=>{
        setdata(prev=>{return{...prev, ...location.state?.food}})
        let passData = location.state?.food??'';
        if(passData === ''){
            window.location = '/'
        }
    }, [])
    
  return (
    <div className='detail v-flex' style={{height: '100px'}}>
        <h5>Food Details ...</h5>
        <div className="foodImg">
            <img src={data?.image} alt="" className='img-fit'/>
        </div>
        <h3>{data?.name}</h3>
        <div className="flex addToCart">
            <h1 className='text-success'><small className="gh">GHS</small>{data?.price?.toFixed(2)}</h1>
            <button className="btn btn-outline-success">Add to Cart</button>
        </div>
        
        <h5>About</h5>
        <p className='text-secondary'>
            This food is very nice and you can't miss it. Just make a good time to give it a try and you will love it forever.
        </p>
    </div>
  )
}

export default FoodDetail