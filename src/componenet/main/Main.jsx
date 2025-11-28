import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const [responsiveBar,setResponsiveBar]=useState(false)
  
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <>
    <div className='main flex-1 min-h-[100vh] pb-[15vh] relative'>




        <div className='nav px-[20px] mt-3 sm:mt-0 sm:px-0 flex items-center justify-between text-[22px] p-[20px ] text-[#585858] rounded-[50%] '>
         
            <p className="ml-8 ">Gemini</p>
            
             <img  className="w-[40px] rounded-[50%] " src={assets.user_icon}/>
        </div>
        <div className="maincontainermarker max-w-[900px] mx-auto ">
          {!showResult ?
          <>
           <div className="greet my-[50px] mx-[0px] text-[36px] sm:text-[56px] text-[#c4c7c5]
            font-medium p-[20px]
            ">
                <p><span style={{WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }} className='bg-[linear-gradient(16deg,_#409bff,_#ff5546)]'>Hello,</span></p> 
                <p>Developed By Sajjad Hussain</p>
                </div>
        
        <div className="cards grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-[15px] p-[20px] mb-7 sm:mb-[80px]">
            <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[20px] relative cursor-pointer hover:bg-[#dfe4ea] transition-all duration-100">
                <p className= 'text-[#585858] text-[17px]'>Suggest Beautiful places to see on an upcoming road trip</p>
                <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
            </div>
             <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[20px] relative cursor-pointer hover:bg-[#dfe4ea] transition-all duration-100">
                <p className='text-[#585858]  text-[17px]'>Brainstorm team bomding activities for our work retreat </p>
                <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon   } alt="" />
            </div>
             <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[20px] relative cursor-pointer hover:bg-[#dfe4ea] transition-all duration-100">
                <p className='text-[#585858]  text-[17px]'>Briefly summarize this concept:urban planning</p>
                <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />bu
            </div> 
             
              <div className="card h-[200px] mb-[70px] sm:mb-0 p-[15px] bg-[#f0f4f9] rounded-[20px] relative cursor-pointer hover:bg-[#dfe4ea] transition-all duration-100">
                <p className='text-[#585858] text-[17px]'>Improve the raedablity of the following </p>
                <img className='w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
            </div> 
             
            </div>
           
          </>
          :
          <div   style={{
    WebkitOverflowScrolling: 'touch', // For smooth scrolling in iOS
    overflowY: 'scroll', // Enable vertical scrolling
    maxHeight: '70vh', // Maximum height for the container
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // For IE and Edge
  }} className='result py-0 px-[5%] max-h-[70vh]'>
            <div className="resulttitle my-10 mx-0 flex items-center gap-[40px]">
            <img className="w-[40px] rounded-[50%]" src={assets.user_icon}/>
            <p>{recentPrompt}</p> 
            </div>
            <div className="result-data flex items-start gap-[8px] sm:gap-5">
              <img className="w-[30px] sm:w-[50px]" src={assets.gemini_icon}/>
              {
                loading?
                <div className="loader w-full flex flex-col gap-[10px]">
                  <hr  className=" rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[800px_50px] h-[20px] animate-pulse" />
                     <hr  className=" rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[800px_50px] h-[20px] animate-pulse" />
                 
                </div>
               :
              <p className="text-[17px] font-light leading-[1.8]" dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>

          </div>
        
        }
           
          <div className="mainbottom absolute mt-4 sm:mt-0
           bottom-0 w-full max-w-[900px] py-0 px-5 m-auto">
            <div className="searchBox bg-[#f0f4f9] py-[10px] px-5 rounded-[50px] flex justify-between flex-col sm:flex-row" >
              <input onChange={(e)=> setInput(e.target.value)} value={input} onKeyDown={(e)=>{
                if(e.key==='Enter'){
                  onSent()
                }
              }} className='flex-1 bg-transparent border-none outline-none p-2 text-[18px]' type='text' placeholder='Enetr Prompt here '/>
               <div className='flex items-center gap-4'>
                <img className='w-[25px] cursor-pointer' src={assets.gallery_icon} alt="" />
                <img className='w-[25px] cursor-pointer' src={assets.mic_icon} alt="" />
                 <img onClick={()=>onSent()} className='w-[25px] cursor-pointer' src={assets.send_icon } alt="" />
                  
               </div>
               </div>
                <p className='botton-info text-[14px] my-[15px] mx-[auto ] font-light leading-[1.8]'>Gemini may display inaccurate info, including about people, so double-check its responses. Your Privacy and gemini apps </p>
             
            
          </div>
        </div>
     
    </div>
    </>
  )
}

export default Main