import React from 'react'
import "./Details.css"
// import Hero from './Hero'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Items from '../dB/data'



const Details = () => {
    // const {id} = useParams()
      const { id } = useParams();
    // console.log("the id",id);
    // console.log(this is not);
    

    
    // Find the item based on the id
    const item = Items.find(item => item.id === parseInt(id));
    console.log("thdhdhdh",item);
    
    
    // If item is not found, handle it accordingly
    if (!item) {
        return <div>Item not found</div>;
    }
    
  return (
    
            <div className='details'>
                <div className='details1'>
                    <div className='details2'>
                        <div className='side1'>
                            <div className='section'>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                            </div>
                            <div className='section1'>
                                <div className='box1'></div>
                                <div className='box2'></div>
                                <div className='box3'></div>
                            </div>
                        </div>
                        <div className='side2'>
                            <div className='circle'>
                                <img src={item.image} alt="" />

                            </div>
                        </div>
                        <div className='side3'>
                            <div className='about'>
                                <h3>Review:<FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStarHalfStroke /> 4.6</h3>
                            </div>
                            <div className='color'>
                                <h3>Color:<FaCircle style={{color: "blue"}} /><FaCircle style={{color: "orangered"}} /><FaCircle style={{color: "orange"}} /><FaCircle style={{color: "brown"}} />
                                </h3>
                            </div>
                            <div className='buttons'>
                            <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
  )
}

export default Details
