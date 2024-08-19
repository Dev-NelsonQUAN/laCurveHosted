import React from 'react'

const Category = () => {
  return (
    <div>Category</div>
  )
}

export default Category

// import React, { useEffect, useState } from 'react'
// import "./categoryStyle.css"
// import Product from '../../Product/Product'
// import {Link, useNavigate} from 'react-router-dom'
// import Items from '../../dB/data'

// const Category = () => {
//   const [catArray,setCatArray] = useState([]);
//   useEffect(()=>{
//     const holdArray = Items.map((e)=> e.category);
//     const catchCats = holdArray.reduce((a,e,i)=> {
//       if(a.length === 0){
//         a.push(e.toLowerCase());
//         return a
//       }else if(a.includes(e.toLowerCase())) {
//         return a
//       }else{
//         a.push(e.toLowerCase());
//         return a
//       }
//     },[])
//   setCatArray(catchCats)

//   },[])

 

//   return (
//     <div className='category'>
//         {
//           catArray.map((name)=>
//             <Link  className='cardWrapper'id={name.id} to= {`/category/${name}`}>
//                 {name.toUpperCase()}
          
//       </Link>
//           )
//         }
   
//     </div>
//   )
// }

// export default Category