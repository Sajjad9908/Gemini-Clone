import React, { useState } from 'react'
import { assets } from '../../assets/assets/assets'


const Sidebar = () => {
    const [extended,setExtended]=useState(false)
    const sidebarToggler=()=>{
        setExtended(!extended)
    }


  return (

    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] px-6 py-4'>
    <div className='top'>
        <img onClick={sidebarToggler} className='munu w-[20px] block ml-[10px] transition-all duration-100 cursor-pointer' src={assets.menu_icon}/>
        <div className='newchat inline-flex mt-[50px] items-center gap-[10px] px-[15px] rounded-[50px] py-[10px] bg-[#e6eaf1] border text-[14px] text-gray-50 cursor-pointer'>
            <img className='munu w-[20px]' src={assets.plus_icon}/>
          {extended && <p className='text-black'>New Chat</p>}  
        </div>
        {extended ? 
        <div className="recent flex flex-col  ">
            <p className='recent title mt-[30npx] mb-[20px]'>Recent history</p>
            <div className="recent-entry flex items-start gap-[10px] p-[10px] pr-5 border-r-[50px] text-[#282828] cursor-pointer  hover:bg-[#e2e6eb] transition-all duration-100">
                <img className='munu w-[20px]'  src={assets.message_icon}/>
                <p>what is react...</p>
            </div>
        </div> :null
}
    </div>
    <div className='bottom'>
    <div className="bottom-item p-r-[10px] recent-entry flex items-center gap-2 p-2 p-r[40px] border-r[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
        <img className='munu w-[20px]'  src={assets.question_icon}/>
       {extended && <p>Help</p>} 

    </div>
     <div className="bottom-item p-r-[10px] recent-entry flex items-center gap-2 p-2 p-r[40px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
        <img className='munu w-[20px]'  src={assets.history_icon}/>
          {extended && <p>Activity</p>} 

    </div>
     <div className="bottom-item p-r-[10px] recent-entry flex items-center gap-2 p-2 p-r[40px] text-[#282828] cursor-pointer  hover:bg-[#e2e6eb]">
        <img className='munu w-[20px]'  src={assets.setting_icon}/>
         {extended && <p>Setting</p>} 

    </div>

    </div>
    
    </div>
  )
}

export default Sidebar