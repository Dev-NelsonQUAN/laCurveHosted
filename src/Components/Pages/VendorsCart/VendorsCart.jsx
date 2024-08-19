import React, { useEffect, useState } from "react";
import "./VendorsCart.css";
import { useNavigate, useParams } from "react-router-dom";
// import AllDatas from '../../dB/allDatas.json'

const VendorsCart = ({name}) => {
  const Nav = useNavigate()
    // const img = [
    //   {
    //     id:1,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSMTA_N4DDYyUCNZy2B_eSo70NRQjQS1ZsA&s",
    //     vendorImg: "../../../src/assets/foodVendorOne.jpeg",

    //   },
    //   {
    //     id: 2,
    //     vendorImg: "../../../src/assets/foodVendorOne.jpeg",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQlghQTWKRpVhVFJnUb_WISShJBVUwFChQw&s"
    //   },
    //   {
    //     id: 3,
    //     vendorImg: "../../../src/assets/foodVendorOne.jpeg",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaII12ZZFsocfRBkaPt5jbIRof1XnAMIbuKEKGh8ctgjRqAoNcoNNEkAOUuj8AcUxAw8&usqp=CAU"
    //   },
    //   {
    //     id: 4,
    //     vendorImg: "../../../src/assets/foodVendorOne.jpeg",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaII12ZZFsocfRBkaPt5jbIRof1XnAMIbuKEKGh8ctgjRqAoNcoNNEkAOUuj8AcUxAw8&usqp=CAU"
    //   },
    //   {
    //   id: 5,
    //   vendorImg: "../../../src/assets/foodVendorOne.jpeg",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnf8DMxniWl2ZPGlCljRpUASxIx2eqxsZjHA&s"
    //   }
    // ]

  // console.log(name)
  // const [it, setIt] = useState()

  // const catName = useParams()
  // // console.log(category)
  // const Nav = useNavigate();

  // const TheDatas = Object.values(AllDatas)
  // const NewDatas = TheDatas.filter((e) => e.catName === catName)


  // useEffect(() => {
  //   const RecentDatas = NewDatas.reduce((a, e, i) =>{
  //     if(a.length === 0){
  //       a.push(e.toLowerCase())
  //       return a
  //     }else if(a.includes(e.toLowerCase())){
  //         return a
  //     }else{
  //         a.push(e.toLowerCase())
  //     }
  //   }, [])
  //   setIt(RecentDatas)
  // }, [])
  // const filterItems = TheDatas.filter((e) => e.catName === catName )
  // console.log(filterItems)

  // const HandleNav = (category) => {
  //   Nav(`menu/${category}`);
  // };

  return (
    <div className="VendorsCartHolder" 
    // onClick={() => Nav('/menu')}
    // onClick={() => HandleNav(e.category)}
    >
      <div className="FoodImgHolder">
        <img className="FoodImg" src={name.image} alt="" />
      </div>

      <div className="VendorsAds">
        <h4 className="nameH4" 
        onClick={()=>Nav(`/anything/menu/${name}`)}
        >{name}</h4>
      </div>

      <div className="VendorsImgHolder">
        <img className="VendorsImg" src="" alt="" />
      </div>
    </div>
  );
};

export default VendorsCart


// import React from "react";
// import "./VendorsCart.css";
// import { useNavigate, useParams } from "react-router-dom";

// const VendorsCart = ({ e, id }) => {
//   // const category = useParams()
//   // console.log(category)
//   const Nav = useNavigate();

//   const HandleNav = (category) => {
//     Nav(`menu/${category}`);
//   };

//   return (
//     <div className="VendorsCartHolder" onClick={() => HandleNav(e.category)}>
//       <div className="FoodImgHolder">
//         <img className="FoodImg" src={e.image} alt="" />
//       </div>

//       <div className="VendorsAds">
//         <h4 className="nameH4">{e.vendor}</h4>
//         <p className="nameP">{e.description}</p>
//         <p className="pDish"> {e.dish}</p>
//       </div>

//       <div className="VendorsImgHolder">
//         <img className="VendorsImg" src={e.vendorImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default VendorsCart;
