import React from 'react'
import { useState } from 'react';
import Phase3 from "./Phase3"

function Phase2(props) {
  console.log(props)
  const [phase,setPhase]=useState(props.phase)
  const [params2,setParams2]= useState(props.params)
  const [isClicked, setClicked]=useState(false)
  const [year, setYear]=useState(1998)
  function handleClick(){
    setClicked(true)
  }
  function handleYear(){
    //update params here
    setPhase("three")
    
    
  
  }
  function handleChange(e){
    setYear(e.target.value)
    console.log("year is", year)
    setParams2({...params2,primary_release_year:year})
    console.log(params2)
  
  }

    if(phase=="two"){
      return (
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 border-2 border-black">
         <h2 class= "text-black">
            <span class="block text-slate-600	 text-xl font-bold">
              Would you to get movies from a certain year?
            </span>
        </h2>
       
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 flex-inline space-x-40 rounded-md">
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" onClick={handleClick}>
                Yes</button>
                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={handleYear}>
                 No
              </button>
          {isClicked ?
          <div id="phase2-box" class="flex w-72">
          <div id="keyword" class="w-100">
            <input type="number"  class=" rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Year" value={year} onChange={handleChange}/>
          </div>
          <button id="thumbsUp" class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" onClick={handleYear} >
                 👍
              </button>
          </div>
          :""}
          
          
        

            </div>
        </div>
    </div>
    
  )
}
if(phase=="three"){
 return <Phase3 phase={phase}  params2={params2} userGreeting={props.userGreeting} />
}
}
export default Phase2;