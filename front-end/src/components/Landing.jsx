import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import Phase2 from './form/Phase2';

function Landing(props) {
  const genres=[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
  const [isClicked, setClicked]=useState(false)
  const [phase,setPhase]= useState("one")
  const [params, setParams]=useState({api_key:"f4a00265d0b6421a5949e48531d923f8",language:"en-US",include_adult:false, include_video:false,with_genres:'', with_keywords:'',primary_release_year:0})
  function upPhase(){
    if(phase=="one"){
      setPhase("two")
    }else{
      if(phase=="two"){
        setPhase("three")
      }
    }
  }
  function handleClick(){
    setClicked(true)
    console.log(isClicked)
  }
  function handleGenre(name){
    genres.forEach(ele=>{
      if(ele.name==name){
        setParams({...params,with_genres:ele.id})
      }
    })
    upPhase();
  }


     if(phase=="one") {
      return(
        
        <div class="text-center   w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 ">
        <h2 class= "text-black ">
          <span style={{color:"#6084BD"}}class="text-xl font-semibold">Welcome,{props.userGreeting}</span>
            <span class=" block font-extrabold text-3xl">
              
                Let's find you a movie!
            </span>
            <span class="block text-slate-600	 text-xl font-bold">
              Do you have a genre in mind?
            </span>
        </h2>
       
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 flex-inline space-x-40 rounded-md">
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" onClick={handleClick}>
                Yes</button>
                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={upPhase}>
                 No
              </button>
            </div>
           { isClicked==true?
              <div class="mt-10">
              <h2 class= "text-black">
              <span class="block font-extrabold text-3xl">
                  Select a genre 
              </span>  
             </h2>
           <div class=" flex-auto flex-wrap space-x-12 space-y-12">
            {genres.map(ele=>
              <button  class=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded" onClick={()=>{handleGenre(ele.name)}}>
                {ele["name"]}
              </button>)}
            </div>
        </div>:""}
        </div>
        
    </div>)}else{if(phase=="two"){
      return <Phase2 phase={phase}  params={params} userGreeting={props.userGreeting}/>
    }}
  
}

export default Landing