import React from "react";
import "./HomeBurger.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Global/Slice";

const HomeBurger = ({setMenu}) => {
  const Nav = useNavigate();
  const dispatch = useDispatch()
  return (
    <div className="HomeBurgerHolder">
      <ul>
        <li onClick={() => Nav('/anything/home')}> Home </li>
        <hr />
        <li onClick={() => Nav('/anything/categories')}> Categories </li>
        <hr />
        <li onClick={() => Nav('/anything/vendors')}> Vendors </li>
        <hr />
        <li onClick={() => dispatch(logout())}> Logout </li>
      </ul>
    </div>
  );
};

export default HomeBurger;
