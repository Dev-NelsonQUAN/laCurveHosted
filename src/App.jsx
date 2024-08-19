import React from "react";
import { createHashRouter, HashRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Cart from "./Components/Pages/Cart/Cart";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Login from "./Components/auth/Login/Login";
import SignUp from "./Components/auth/SignUp/SignUp";
import Categories from "./Components/Pages/Categories/Categories";
import Vendors from "./Components/Pages/Vendors/Vendors";
import Menu from "./Components/Pages/Menu/Menu";
import Layout from "./Components/layout/Layout";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import PrivateRouting from "./Components/auth/PrivateRouting";


const router = createHashRouter([
  {
    path: '/',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    element: <PrivateRouting/>,
    path: "anything",
    children: [
      {
        path: 'home',
        element: <HomePage/>
      },
      // {
      //   path: '/menu',
      //   element: <Menu/>
      // },
      {
        path: 'vendors',
        element: <Vendors/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'checkout',
        element: <CheckOut/>
      },
      {
        path: 'categories',
        element: <Categories/>
      },
      // {
      //   path: '/addcart',
      //   element: <AddCart/>
      // },
      {
        path: 'menu/:vendor',
        element: <Menu/>
      }
    ]
  },
])

const App = () =>{
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

// import AddCart from "./Components/Pages/Menu/Menu";

// const App = () => {
//   return (
//     <div>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route element={<Layout />}>
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/vendors" element={<Vendors />} />
//           <Route path="/checkout" element={<CheckOut />} />
//           <Route path="/menu" element={<Menu />} />
//           {/* <Route path="/menu/:category/" element={<Menu />} /> */}
//             {/* <Route path="/menu" element={<Menu/>}/> */}
//             {/* <Route path="/addcart" element={<AddCart/>}/> */}
//           </Route>
//         </Routes>
//       </HashRouter>
//     </div>
//   );
// };

// export default App;

// import { createHashRouter, RouterProvider } from "react-router-dom";
// import SignUp from "./Form/SignUp";
// import Login from "./Form/Login";
// import Layout from "./Layout/Layout";
// import Main from "./Components/Main";
// import Vendor from "./Components/Vendor";
// import Cart from "./Components/Cart";
// import NewProduct from "./Components/NewProduct";
// import Menu from "./Components/Menu";


// const router =createHashRouter([
//     {
//         path:"/",
//         element:<SignUp/>
//     },
//     { path:"/login",
//         element:<Login/>

//     },
//      { path:"/layout",
//         element:<Layout/>

//     },
//      { path:"/menu",
//         element:<Main/>

//     },
//      { path:"/vendor",
//         element:<Vendor/>

//     },
//      { path:"/cart",
//         element:<Cart/>

//     },
//      { path:"/newP/:name",
//         element:<Menu/>

//     }
// ])

// function App(){
//     return(
//         <>
//         <RouterProvider router={router}/>
//         </>
//     )
// }

// export default App
