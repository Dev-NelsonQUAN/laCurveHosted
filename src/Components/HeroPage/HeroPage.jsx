import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import Categories from "../Pages/Categories/Categories";

const HeroPage = () => {
  const [name, setName] = useState("");
  const { pathname } = useLocation();
  const Nav = useNavigate();

  useEffect(() => {
    if (pathname) {
      const val = pathname.slice(1).toUpperCase();
      setName(val);
    }
  }, [pathname]);
  return (
    <>
      <div className="HeroPage-wrapper">
        <div className="heropage-inner-wrapper">
          {/* {name} */}
          <h4 className="h4"> Food Orders and more </h4>
          <button className="Btn" onClick={() => Nav("/anything/vendors")}>
            {" "}
            Place your order{" "}
          </button>
        </div>
      </div>

      <Categories />
    </>
  );
};

export default HeroPage;
