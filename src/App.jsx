
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App=()=>{

  return (
    <div className='bg-[#022562] font-sans text-[16px] lg:text-[18px] text-white h-screen flex flex-col'> 
      <Header/>
      <div className='grow pt-[70px] bg-[#172153] '>
       <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
