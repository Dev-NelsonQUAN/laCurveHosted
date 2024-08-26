import React, { useEffect, useState } from "react";
import "./VendorsCart.css";
import { useNavigate, useParams } from "react-router-dom";
// import AllDatas from '../../dB/allDatas.json'

const VendorsCart = ({name}) => {
  const Nav = useNavigate()
  
  
  return (
    <div className="VendorsCartHolder" 
    onClick={()=>Nav(`/anything/menu/${name}`)}
    // onClick={() => Nav('/menu')}
    // onClick={() => HandleNav(e.category)}
    >
      <div className="FoodImgHolder">
        {/* <img className="FoodImg" src={name.image} alt="" /> */}
      </div>

      <div className="VendorsAds">
        <h4 className="nameH4" 
        // onClick={()=>Nav(`/anything/menu/${name}`)
      // }
        >{name}</h4>
      </div>

      <div className="VendorsImgHolder">
        {/* <img className="VendorsImg" src="" alt="" /> */}
      </div>
    </div>
  );
};

export default VendorsCart