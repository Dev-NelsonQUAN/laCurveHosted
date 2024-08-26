import React, { useEffect } from "react";
import "./CheckOut.css";
import { useNavigate } from "react-router-dom";
// import DataJs from '../../dB/data'
import CheckImg from "../../../assets/sharpMeal2.jpeg";
import CheckOutItems from "./CheckOutItems";
import Aos from "aos"
import 'aos/dist/aos.css'

const CheckOut = ({ filtered, setShowOrder }) => {
  useEffect(() =>{
    Aos.init()
  },[])
  return (
    <div className="CheckOutHolder" data-aos='flip-right'>
      <h3 className="X" onClick={() => setShowOrder(false)} data-aos='flip-left'>
        {" "}
        X{" "}
      </h3>
      <div className="CheckOut">
        {filtered.map((e) => {
          return <CheckOutItems e={e}/>;
        })}

        <div className="proceedBtnHold">
          <button className="ProceedBtn" onClick={() => Nav("/home")}>
            {" "}
            Proceed{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
