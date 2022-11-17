import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import Landing from "./components/Landing"
import Login from "./components/Login"
import Home from "./components/Home"
import List from "./components/List"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Movie from "./components/Movie"
import component from 'react';
import { UNSAFE_getPathContributingMatches } from '@remix-run/router';


function App() {
const [auth,setAuth]=useState("")
const [decodedNam,setDecodedName]=useState("")
console.log("auth is", auth)
useEffect(() => {
  console.log('executed!')

  setUser()
},[])

const setUser = () => {
  let token = localStorage.getItem("token");
  console.log(token)
  setAuth(token)
}
function logout(){
    localStorage.removeItem("token")
    setAuth("")
    navigator("/")
  
}
function updateDecode(name){
  setDecodedName(name)
}



  return (
    <Router>
    <div className="App"> 
    <Navbar isAuth={auth} logout={logout}/>

    <Routes>
      <Route element={<Landing userGreeting={decodedNam} />} path="/landing"></Route>
      <Route element={<Login updateDecode={updateDecode} updateUser={setUser} />} path="/login"></Route>
      <Route element={<Home/>} path="/"></Route>
      <Route element={<Movie />}  path="/movie"></Route>
      <Route element={<Signup/>} path="/sign-up"></Route>
      <Route element={<List  userGreeting={decodedNam}/>} path="/my-list"></Route>
     </Routes> 
        
    </div>
    </Router>
  );
}

export default App;
