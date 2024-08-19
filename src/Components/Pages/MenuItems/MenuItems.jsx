import React from 'react'
import './MenuItems.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Global/Slice'


const MenuItems = ({e}) => {
  const dispatch = useDispatch()
    console.log(e)
  return (
    <div className='MenuItemsHolder'>
        <div className="MenuImg">
            <img src={e.image} alt="" />
        </div>

        <div className="MenuName">
            <h5 className='MenuH5'> {e.dish} </h5>
            <p className='MenuDes'> {e.description} </p>
            <p className='MenuP'> ₦{e.price} </p>
        <button className='MenuBtn' onClick={() => dispatch(addToCart(e))}> Add to cart </button>

        </div>

    </div>
  )
}

export default MenuItems