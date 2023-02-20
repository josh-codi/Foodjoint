import React from 'react'
import data from '../sampleData'
import './cart.css'

function Cart() {
  return (
    <div className='cart'>
        <h5>Your Cart Food</h5>
        {
            data.map((val,idx)=>{
                if(idx < 2){
                    return(
                        <div key={idx} className="cartItem flex">
                            <div className="cartItemImg">
                                <img src={val.image} alt="" className='img-fit'/>
                            </div>
                            <div className="cartItemDetails v-flex">
                                <h6>{val.name}</h6>
                                <h1><small className="gh">GHS</small>{val.price.toFixed(2)}</h1>
                                <aside className="flex increaseItem">
                                    <div className="flex _">-</div>
                                    <b>2</b>
                                    <div className="flex __">+</div>
                                </aside>
                            </div>
                        </div>
                    )
                }
            })
        }

        <div className="flex total">
            <aside className="v-flex">
                <small className="text-secondary">Item Total :</small>
                <small className="text-secondary">Delivery Fee : </small>
            </aside>
            <aside className="v-flex ">
                <small>GHS 98.00</small>
                <small>GHS 00.00</small>
            </aside>
        </div><br />
        <div className="flex paymentBtn">
            <button className="btn btn-outline-success">
                Make Payment
            </button>
        </div>
    </div>
  )
}

export default Cart