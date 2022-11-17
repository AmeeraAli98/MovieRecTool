import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode";
function Login(props) {
    const [data,setData]=useState({username:'',password:''});
   
    const navigator = useNavigate();

    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})
    }

    

      async function handleSubmit(e){
          e.preventDefault();
              const url="http://localhost:8000/login"
               await axios.post(url,data).then(res=>{
                localStorage.setItem("token",res.data);
                var token = localStorage.getItem("token")
                var decoded = jwt_decode(token);
                console.log("decoded yeah",decoded.username)
                props.updateDecode(decoded.username)


            
            })
                props.updateUser()
               navigator("/landing")


    }
  return (
    <>
    <form id="login" class="flex w-full max-w-sm space-x-3 z-0" style={{paddingLeft:"1%"}}>
    <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow-lg border-2 border-black-50">
        <div class="mb-6 text-3xl font-light text-center text-gray-800 ">
           Welcome Back!
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
                <div class=" relative ">
                    <input type="text" name="username" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Username" value={data.user} onChange={handleChange}/>
                    </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <div class=" relative ">
                        <input type="password" id="contact-form-email" name="password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Password" value={data.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="col-span-2">
                        
                    </div>
                    <div class="col-span-2 text-right">
                        <button type="submit" class="py-2 px-4 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " style={{background:"#FABE43"}} onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
              <img id="gif3" src="/images/Hello-rafiki.png" class="z-10 mr-60" width="399" height="300" />
      </>
  )
}

export default Login;