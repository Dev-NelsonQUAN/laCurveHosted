import React, { useState } from "react";
import "./HeadertStyle.css";
import { IoMenu, IoPersonCircleOutline } from "react-icons/io5";
import DropDown from "../DroupDown/DropDown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { FaCableCar } from "react-icons/fa6";
import laCurve from "../../assets/laCurve.jpg";
import HomeBurger from "../Pages/HomeBurger/HomeBurger";
import { logout } from "../Global/Slice";


const Header = () => {
  const Nav = useNavigate();
  const dispatch = useDispatch()

  const [droupDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState(false)

  const { cart } = useSelector((state) => state);

  return (
    <div className="header-wrapper">
      <div className="header-inner-wrapper">
        <div className="Logo-wrapper">
          <button className="HeaderBtn" onClick={() => Nav("/anything/home")}>
            {/* <NavLink to={"/home"}>  */}{" "}
            <img src={laCurve} alt="la curve image" className="HeaderImg" />
            <h4 className="BottomLaCurve"> La'Curve </h4> {/* </NavLink> */}
          </button>

          <div className="icon-logo">
            <img src={laCurve} alt="laCurve" className="logoWrap" />
            <h4 className="h4Btn">La'Curve</h4>
          </div>
        </div>

        <div className="middle-section">
          {/* <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "HeaderActive" : "HeaderNotActive"
              }
            >
              {" "}
              Home
            </NavLink>
          </li> */}
          <NavLink
            to="/anything/categories"
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
          >
            {" "}
            <li>Categories</li>{" "}
          </NavLink>
          <NavLink
            to="/anything/vendors"
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
          >
            {" "}
            <li>Vendors</li>{" "}
          </NavLink>
          <NavLink
            to="/anything/cart"
            className={({ isActive }) =>
              isActive ? "HeaderActive" : "HeaderNotActive"
            }
          >
            {" "}
            <li>Cart ({cart.length})</li>{" "}
          </NavLink>


          <h5 style={{cursor: "pointer"}} onClick={() => dispatch(logout())}>
            Logout
          </h5>
        </div>
        <div className="account-wrapper">
          <div className="account">
            <IoPersonCircleOutline
              className="iconspers"
              onMouseEnter={() => setDropDown(true)}
            />
          </div>

          <div className="menu">
            <IoMenu onClick={()=> setMenu(true)}/>
              {
                menu ? <HomeBurger setMenu={setMenu}/> : null
              }
          </div>
        </div>
        {droupDown ? <DropDown setDropDown={setDropDown} /> : null}
      </div>
    </div>
  );
};

export default Header;
