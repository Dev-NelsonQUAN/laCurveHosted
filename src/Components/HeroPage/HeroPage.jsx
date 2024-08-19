import React, { useEffect, useState } from 'react'
import "./style.css"
import { useLocation } from 'react-router-dom'

const HeroPage = () => {
  const  [name,setName] = useState("")
  const {pathname} = useLocation()

  useEffect(()=>{
    if(pathname) {
      const val = pathname.slice(1).toUpperCase();
      setName(val)
    }
  },[pathname])
  return (
    <div className='HeroPage-wrapper'>
        <div className='heropage-inner-wrapper'>
           {/* {name} */}
            <h4 className='h4'>Food delivery and more</h4>
            <button className='Btn'> Place your order </button>
        </div>
    </div>
  )
}

export default HeroPage