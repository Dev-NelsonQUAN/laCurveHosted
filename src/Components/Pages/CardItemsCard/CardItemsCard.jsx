import React from 'react'
import './CardItemsCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, incrementQty } from '../../Global/Slice'

const CardItemsCard = ({e}) => {
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(e)
  return (
    <div className='CardItemsCardHolder'>
        {/* <div className="CardItemsImgHolder"> */}
            <img src={e.image} alt="" className='cartCardImg'/>
        {/* </div> */}

        <div className="CardItemsBottom">
            <h6 className='CartHead'> {e.dish} </h6>
            <p className='CartDesc'> {e.description } </p>
            <p className='CartPrice'> ₦{e.price}</p> 
            <nav>
                <button className='Sub' onClick={() => dispatch(decrementQty(e))}> - </button>
                <p className='Quant'> {e.QTY} </p>
                <button className='Add' onClick={() => dispatch(incrementQty(e))}> + </button>
            </nav>
            <p className='AddTxt'>Added to your cart </p>
        </div>

    </div>
  )
}

export default CardItemsCard