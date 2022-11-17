import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
   
<main className="relative overflow-hidden h-screen">
    <div className=" bg-white flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span>
            <h1 className=" text-4xl mr-40 font-bold" style={{color:"#15BF81"}}>
                Bored?
            </h1>
            <h1 className=" ml-20 text-3xl font-bold mt-0 mb-2" style={{color:"#F2295F"}}>
                Movie night?
            </h1>
            <h1 className="text-3xl font-bold mt-0 mb-2" style={{color:"#F2CB05"}}>
                Looking for something to watch
            </h1>
            </span>
                <p>
                  We're here to help you! Try out our movie recommender for 
                  a change
                </p>
                <div className="flex mt-10 ml-20">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4">
                      <Link to="/sign-up">Get started</Link>
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4">
                      <Link to="/login">Login</Link>
                    </a>
                    
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
               <div id="graph"><img src="/images/graph.png" class="max-w-xs md:max-w-sm m-auto h-96 w-96"/></div>
                 <div id="gif"><img src="/images/Roll.gif" class="max-w-xs md:max-w-sm m-auto"/></div>
                <div  id="graph2"><img src="/images/graph2.png" class="max-w-xs md:max-w-sm m-auto h-72 w-64"/></div> 
                <div id="gif2"><img src="/images/question.gif" class="max-w-xs md:max-w-sm m-auto h-56 w-60"/></div>

            </div>
        </div>
    </div>
</main>

  )
}

export default Home