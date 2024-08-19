import React from "react";
import "./HomeBurger.css";
import { useNavigate } from "react-router-dom";

const HomeBurger = ({setMenu}) => {
  const Nav = useNavigate();
  return (
    <div className="HomeBurgerHolder" onClick={() => setMenu(false)}>
      <ul>
        <li> Home </li>
        <li> Vendors </li>
        <li> Categories </li>
      </ul>
    </div>
  );
};

export default HomeBurger;
