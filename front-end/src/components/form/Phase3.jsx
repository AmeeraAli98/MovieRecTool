import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Movie from '../Movie';

function Phase3(props) {
  console.log('phase 3',props)
  const [params3,setParams3]= useState(props.params2)
  const [phase,setPhase]= useState(props.phase)
  const [isClicked, setClicked]=useState(false)
  const [keyword, setKeyword]=useState("")

  function handleClick(){
    setClicked(true)
  }
  function handleWord(){
    setParams3({...params3,with_keywords:keyword})
    launchMovie();
   
    
  }
  function launchMovie(){
    setPhase("get-movie")
  }
  function handleChange(e){
    setKeyword(e.target.value)
  }

  if(phase=="three"){
  return (
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 border-2 border-black">
         <h2 class= "text-black">
            <span class="block text-slate-600	 text-xl font-bold">
              Would you to use a keyword in the search?
            </span>
        </h2>
       
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 flex-inline space-x-40 rounded-md">
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" onClick={handleClick}>
                Yes</button>
                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={handleWord}>
                 No
              </button>
          {isClicked ?
          <div id="phase2-box" class="flex w-72">
          <div id="keyword" class="w-100">
            <input type="text"  class=" rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Keyword" value={keyword} onChange={handleChange}/>
          </div>
          <button id="thumbsUp" class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" onClick={handleWord} >
                 👍
              </button>
          </div>
          
          :""}
        

            </div>
        </div>
    </div>
    
  )}
  if(phase=="get-movie"){
    return <Movie movieParams={params3}  userGreeting={props.userGreeting} />
  }
}

export default Phase3;