import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Movie(props) {
  const navigator=useNavigate();
  const [movieParams,setMovieParams] =useState(props.movieParams)
  const [movie,setMovie]=useState('')
  const [count,setCount]=useState(0)
  async function getRec(){
    const fetched_rec= await axios.get('https://api.themoviedb.org/3/discover/movie', {params: movieParams})
    setMovie(fetched_rec.data.results[count])
    console.log(movie)
    setCount(count+1);
  }
  async function addMovie(){
    axios.post("http://localhost:8000/my-list",{filmName:movie.title, poster:movie["poster_path"],username:props.userGreeting}).then(res=>res.console.log("hi"))
    navigator("/my-list")

  }
  useEffect(()=>{
    getRec();
  },[])
  if(count<=20){
  return (
    
<div class="flex bg-white rounded-lg shadow">
    <div class="flex-none w-24 md:w-48  relative">
    <img class="z-0" src={`https://image.tmdb.org/t/p/original/${movie["poster_path"]}`} width={300} height={340} style={{backgroundSize: 'cover'}}/>
    <img id="star" class="z-10" src="/images/star-icon.png" width="65" height="90"/>
    <p id="score" class="z-30 font-bold">{movie.vote_average}</p>
    </div>
    <form class="flex-auto p-6">
        <div class="flex flex-wrap">
            <h1 class="flex-auto font-mono text-3xl font-semibold" style={{color:"#E83A9C"}}>
                {movie.title}
            </h1>
            <div class="text-md flex font-semibold text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

                  <span class="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 ">
                      {movie.vote_count}
                  </span>
            </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 tex-black font-sans">
            <div class="space-x-2 flex">
               Overview: {movie.overview}
                 </div>
                               
              </div>
              <div class="flex-auto mb-4 space-x-9 text-sm font-medium">
                   <button type="button" class="py-2 px-4 w-96  hover:bg-indigo-200 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " style={{background:"#2E76E8"}} onClick={getRec}>
                                   I want another movie
              </button>
                   <button type="button" class="py-2 px-4 w-96 bg-yellow-300	 hover:bg-pink-300 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-l" onClick={addMovie}>
                                  💗
              </button>
                            </div>
                            
                        </form>
                    </div>

  )
}
else{
  return "enough movies! Refine your search"
}
}
export default Movie;