import React, { useEffect } from "react";
import './CheckOut.css'


const CheckOutItems = ({e}) => {

  return (
    <div className="CheckOutItemsHolders" >
      {/* <p className="Names"> {e?.vendor} </p> */}

      <div className="Check">
        <img src={e?.image} alt="image" className="CheckImg" />

        <div className="CheckOther">
          <h3 className="Checkerly"> {e?.dish} </h3>
          <p> ₦{e?.price} </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
