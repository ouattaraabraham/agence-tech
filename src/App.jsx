import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App=()=>{

  return (
    <div className='bg-[#002057] text-slate-300 font-sans text-[16px] lg:text-[18px] h-screen flex flex-col'> 
      <Header/>
      <div className='grow bg-[#002057]'>
       <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
