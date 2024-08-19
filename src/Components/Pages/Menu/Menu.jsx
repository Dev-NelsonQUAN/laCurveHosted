import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItems from "../MenuItems/MenuItems";
import Datas from "../../dB/data";
import secDatas from "../../dB/vendors";
import { useParams } from "react-router-dom";
import AllDatas from "../../dB/allDatas.json";

const Menu = () => {
  const [them, setThem] = useState([])

  const { vendor } = useParams();
  const theDatas = Object.values(AllDatas);

  useEffect(()=>{
    const filterItems = theDatas.filter(e => e.vendor.toLocaleLowerCase() === vendor.toLocaleLowerCase())
    console.log(filterItems)
    setThem(filterItems)
  },[])

  return (
    <div className="Menu">
      <div className="MenuInner">
        {
          them.map((e) =>{
           return <MenuItems e={e} id={e.id}/>
})
        }
      </div>
    </div>
  );
};

export default Menu;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import MenuItems from '../MenuItems/MenuItems';
// import AllDatas from '../../dB/allDatas.json';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const { vendor } = useParams();

//   useEffect(() => {
//     if (AllDatas && vendor) {
//       const filteredItems = AllDatas.filter((item) => item.vendor.toLocaleLowerCase() === vendor.toLocaleLowerCase());
//       setMenuItems(filteredItems);
//     }
//   }, [vendor, AllDatas]);

//   return (
//     <div className="Menu">
//       <div className="MenuInner">
//         {menuItems && menuItems.map((item) => (
//           <MenuItems key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import MenuItems from '../MenuItems/MenuItems';
// import AllDatas from '../../dB/allDatas.json';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const { vendor } = useParams();

//   useEffect(() => {
//     try {
//       const filteredItems = AllDatas.filter((item) => item.vendor.toLocaleLowerCase() === vendor.toLocaleLowerCase());
//       setMenuItems(filteredItems);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [vendor]);

//   return (
//     <div className="Menu">
//       <div className="MenuInner">
//         {menuItems.map((item) => (
//           <MenuItems key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


// const { category } = useParams(); // Extract category from URL
// console.log("category", category)

// // Filter items by the specific category
// const filterItems = Datas.filter(item => item.category === category);
// const filterSecItems = secDatas.filter(item => item.category === category);

// // Combine both filtered datasets if needed
// const combinedItems = [...filterItems, ...filterSecItems];

// return (
//   <div className="Menu">
//     <div className="MenuInner">
//       {combinedItems.length > 0 ? (
//         combinedItems.map((item) => (
//         ))
//       ) : (
//         <p>No items found for the selected category.</p>
//       )}
//     </div>
//   </div>
// );
