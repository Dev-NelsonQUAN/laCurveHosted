import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header";

const PrivateRouting = () => {
  const { isLoggedIn } = useSelector((state) => state);
  console.log(isLoggedIn);

  return (
    <div>
      {
        isLoggedIn === true 
        ? 
        <>
        <Header/>
      <Outlet/>
      </>
        : 
        <Navigate to={"/"} />
      }
    </div>
  );
};

export default PrivateRouting;
