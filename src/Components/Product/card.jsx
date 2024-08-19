import React from 'react'
import "./cardStyle.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../Global/Slice'
import { useNavigate} from 'react-router-dom'
const Card = ({e}) => {
  const dispatch = useDispatch()
  const Nav = useNavigate()


  

  return (
    <div  className='cardWrapper'>
        <div className='card-img'>
            <img src={e.image} alt="" />
        </div>
        <div className='product-name'>
          {e.name}
        </div>
        <div className='product-price'>${e.price}</div>
        <div className='btnHolder'>

        <button className='addCartbtn' onClick={()=>dispatch(addToCart(e))}>Add to cart</button>
        <button className='addCartbtn' onClick={()=>Nav(`/details/${e.id}`)}>View Details</button>
        
        </div>
    </div>
  )
}

export default Card