import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";


export  const Context= createContext()

const ContextProvider=({children})=>{
  const[input,setInput]=useState('')
  const[recentPrompt,setRecentPrompt]=useState('')
  const [prevPrompts,setPrevPrompts]=useState([])
  const [showResult,setShowResult]=useState(false)
  const [loading,setLoading]=useState(false)
  const[resultData,setResultData]=useState('')


const WordsTyping=(index,nextWord)=>{
  setTimeout(() => {
    setResultData((prev)=> prev+ nextWord)
  }, 60*index);

}
 
 
    const onSent=async(prompt)=>{
         setResultData('');
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
      
    
     const responce= await main(input)

    const responceArray=responce.split('**')
    let newArray="";
    for(let i=0; i<responceArray.length;i++){
      if((i=== 0) || (i%2!==1) ){
      newArray+=responceArray[i]
      }
      else{
         newArray+= "<b>"+responceArray[i] + "</b>"
      }
    }
    const newResponce2=newArray.split('*').join('</br>')
     const ressponceInType=newResponce2.split(' ')
     for(let i=0; i<ressponceInType.length; i++){
      const nextWord=ressponceInType[i]
      WordsTyping(i,nextWord+" ")
     }
    setLoading(false)
    setInput('')
   
       

    }
 
  
   
    const contextValue={
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,


    }

    return (
    <Context.Provider value={contextValue}>
        {children}

    </Context.Provider>
    )
}

export default ContextProvider