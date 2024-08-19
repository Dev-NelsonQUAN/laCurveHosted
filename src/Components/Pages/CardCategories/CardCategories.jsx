import React from 'react'
import './CardCategories.css'


const CardCategories = ({e, id}) => {
    // const blurStyle = {
    //     background: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%), url(${e?.img})`,
    // }
    
  return (
    <div className='CardCategories' >
        <div className='CardCat1'>
            <img src={e.image} alt="" className='CartCatImg'/>
            <button className='CartBtn'>
             {e.dish}
            </button>
        </div>
    </div>
  )
}

export default CardCategories