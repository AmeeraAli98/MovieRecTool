import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom';

const Navbar= (props) =>{
    
      const navigator= useNavigate();
      const auth =props.isAuth
      function logAndNavigate(){
          navigator("/")
        props.logout();
      }
    
      
  return (
    <header class="bg-slate-800 h-20 flex items-center z-30 w-full">
    <div class="container mx-auto px-6 flex items-center justify-between">
        <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
            <Link to="/">Recommend.Me</Link>
        </div>
        <div class="flex items-center">
            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
               
               { auth ?
               <>
                <Link to="/my-list" class="py-2 px-6 flex">
                    Watchlist
                </Link>
                <Link to="/landing" class="py-2 px-6 flex">
                    Get Movie
                </Link>
                <button onClick={logAndNavigate} class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" >
                 Logout
                </button>
                </>:""
                }
              
            </nav>
            <button class="lg:hidden flex flex-col ml-4">
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
            </button>
        </div>
    </div>
</header>


  )
  

}

export default Navbar