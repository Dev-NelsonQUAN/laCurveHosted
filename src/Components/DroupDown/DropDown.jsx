import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../Global/Slice'

const DropDown = ({ setDropDown }) => {
  const { isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch()

  const Nav = useNavigate();
  return (
    <div className="dropdown-wrapper" onMouseLeave={() => setDropDown(false)}>
      {
        isLoggedIn === true ? (
        <p onClick={() => dispatch(logout())}> Logout </p>
      ) : (
        <>
        <p onClick={() => Nav("/login")}>Login</p>
        <p onClick={() => Nav("/")}>Sign Up</p>
        </>
      )
      }
    </div>
  );
};

export default DropDown;
