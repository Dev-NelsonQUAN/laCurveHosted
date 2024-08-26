import React, { useState } from "react";
import "./CartItems.css";
import CardItemsCard from "../CardItemsCard/CardItemsCard";
import Datas from "../../../Components/dB/data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Global/Slice";
import Order from '../Order/Order'
import CheckOut from "../CheckOut/CheckOut";

const CartItems = () => {
  const dispatch = useDispatch()
  const {cart, totalQty, total} = useSelector((state) => state)
  const [showOrder, setShowOrder] = useState(false);
  const [vendors, setVendors] = useState('')
  console.log(vendors)
  console.log(cart)
  // const orders = cart.filter((item) => item.vendor === vendors)
  // console.log(orders)
  // console.log(cart)
  // const checkVendors = cart.map((e) => e.vendor) 
  // console.log(checkVendors)

  // const checkout = () => {

  // }
const filtered =cart.filter((cart)=>cart.vendor === vendors)
console.log(filtered)

  const Nav = useNavigate()
  return (
    <div className="CartItemsHolder">
      <div className="cartItemsHoldTags">
        <p className="NumTotal"> Total Quantity: {totalQty} </p>
        <button className="ClearBtn" onClick={() => dispatch(clearCart())}> Clear Cart </button>
        <button className="ProceedCheck"
        onClick={() => setShowOrder(true)}
        > Proceed CheckOut </button>
        
        <select onChange={(e)=>setVendors(e.target.value)}>
          <option value="">--CheckOut for?</option>
          <option value="Iya Rice"> Iya Rice </option>
          <option value="Iya Fries">  Iya Fries </option>
          <option value="Iya B&B"> Iya B&B </option>
          <option value="Mama Calabar"> Mama Calabar </option>
          <option value="Delicious Treat"> Delicious Treat </option>
        </select>

        <p className="TotalQuant"> Total Amount: ₦{total} </p>
      </div>

      <div className="CartMainHolder">
      {
            showOrder && <CheckOut filtered={filtered} setShowOrder={setShowOrder}/>
          }
        {
          cart.map((e) => {
            return  <CardItemsCard e={e}/>;
        })
        }
      </div>
    </div>
  );
};

export default CartItems;
