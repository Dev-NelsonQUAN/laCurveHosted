import React from 'react'
import './Cart.css'
import CartItems from '../CartItems/CartItems'

const Cart = () => {
  return (
    <div className='CartHolder'>
      <div className="CartInner">
        <CartItems/>
      </div>
    </div>
  )
}

export default Cart

// import React, { useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// import './cart.css';
// import CartItems from '../../CartItem/CartItem';
// import { useDispatch, useSelector } from 'react-redux';
// // import { clearCart } from '../../Components/Global/Slice';
// // import { clearCart } from '../../Components/Global/Slice';
// // import { clearCart } from '../global/Features';
// import { clearCart } from '../../Global/Slice';

// const Cart = () => {
//   const{cart,total,totalQty,loggedInUser} = useSelector((state)=> state)
//   const dispatch =useDispatch()
//   // const handleClearCart = () => {
//   //   dispatch(clearCart())
//   // }
//   function payKorapay() {
//     // window.Korapay.initialize({
//     //     key: import.meta.env.VITE_Public_Key,
//     //     reference: `Mcode_${Date.now()}`,
//     //     amount: total, 
//     //     currency: "NGN",
//     //     customer: {
//     //       name: loggedInUser.name,
//     //       email: loggedInUser.email
      
//     //     },
//     //     // notification_url: ""
//     // });

//     window.Korapay.initialize({
//       key: import.meta.env.VITE_Public_Key,
//       reference: `Mcode_${Date.now()}`,
//       amount: total, 
//       currency: "USD",
//       customer: {
//        name: "nelson",
//         email: "nelson@gmail.com"
//       },
//       notification_url: ""
//   });
// }


//   return (
//     <div className="CartContainer">
//       <div className="CartInfo">
//         <div>Total: ${Number( total).toFixed(2)}</div>
//         <div className="CartClear" 
//           onClick={()=> dispatch(clearCart())}
//         >Clear Cart</div>
//         <button onClick={payKorapay} className='payBtn'>Pay</button>
//         <div>Total Quantity:{totalQty} </div>
//       </div>
//       <div className="CartHolder">
//         {cart.map((e) => (
//           <CartItems info={e} key={e.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
