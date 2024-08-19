import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
// import './style.css'

const Layout = () => {
  return (
    <>
      <Header/>
    <Outlet/>
    </>
    
  )
}

export default Layout

// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import "./style.css"
// import Header from '../Header/Header'
// import HeroPage from '../HeroPage/HeroPage'

// const Layout = () => {
//   return (
//     <div className='layout'>
//       <div className='layout-inner'>
//         <Header/>
//         {/* <HeroPage/> */}
//         <Outlet/>
//       </div>
//     </div>
//   )
// }

// export default Layout