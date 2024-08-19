import React from 'react'
import "./style.css"
import Card from './card'
import Items from '../dB/data'
import { useParams } from 'react-router-dom'


const Product = () => {
  const {category} = useParams();
  const filterItems = Items.filter(event => event.category === category)
  return (
    <div className='Product-wrapper'>
        <div className='Product-inner-wrapper'>
          {
            filterItems.map((e)=>(
              <Card e={e} id ={e.id}/>
            )
            )
          }
            
        </div>
    </div>
  )
}

export default Product