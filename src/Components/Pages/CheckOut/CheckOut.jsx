import React from 'react'
import './CheckOut.css'
import { useNavigate } from 'react-router-dom'
// import DataJs from '../../dB/data'
import CheckImg from '../../../assets/sharpMeal2.jpeg'


const CheckOut = ({filtered}) => {
    const Nav = useNavigate()

  return (
    <div className='CheckOutHolder'>
        <div className='CheckOut'>

            {/* {
                DataJs
            } */}
            
            <p className='Names'>Iya Risi</p> 

            <div className='Check'>
                <img src={CheckImg} alt="image" className='CheckImg'/>

                <div className='CheckOther'> 
                    <h3 className='Checkerly'> Jolllof Rice </h3>
                        <p> ₦700 </p>
                </div>
            </div>

            

            <div className='proceedBtnHold'>
            <button className='ProceedBtn'
            onClick={() => Nav('/home')}
            > Proceed </button>
            </div>

        </div>

    </div>
  )
}

export default CheckOut