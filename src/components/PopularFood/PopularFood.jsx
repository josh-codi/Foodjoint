import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../sampleData'
import './PopularFood.css'

function PopularFood() {
  return (
    <div className='popularFood'>
        <aside className="head flex">
            <h4>Popular Food</h4>
            <small>View all</small>
        </aside>
        <div className="foodContainer flex">
            {
                data.map((food,idx)=>{
                    return(
                        <div idx={idx} className="food v-flex">
                                <Link to={`./detail/${food.id}`} state={{food:food}}>
                                <div className="img-container" style={{width: '100%', height: '200px'}}>
                                    <img src={food.image} alt="" className="img-fit" />
                                </div>
                                <div className="v-flex foodsubText">
                                    <p>{food.name}</p>
                                    <small className={`text-${idx%2 !== 0 ? 'success':'danger'}`}>OPENED</small>
                                    <h2><small>GHS</small>{food.price?.toFixed(2)}</h2>
                                </div>
                        </Link>
                            </div>
                        
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default PopularFood