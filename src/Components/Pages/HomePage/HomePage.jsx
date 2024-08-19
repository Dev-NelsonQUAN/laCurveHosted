import React from 'react'
import "./HomePage.css"
import Card from '../../Product/Product'
import products from '../../dB/data'
import Header from '../../Header/Header'
import HeroPage from '../../HeroPage/HeroPage'


const HomePage = () => {
  return (
    <div className='Home'>
       <div className='HomeHolder'>
        <HeroPage/>
       </div>
    </div>
  )
}

export default HomePage