import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from "./Card"
function List(props) {
  const userGreeting =props.userGreeting
    const [list,setList]=useState(null)
    console.log("props",props)
   async function getList(props){
    const fetchedList = await axios.get("http://localhost:8000/my-list",{params:{username:userGreeting}}).then(res=>{console.log(res);setList(res.data)})
    }
     async function deleteList(id){
      
        const deleteList = await axios.post("http://localhost:8000/delete", {id:id,username:userGreeting}).then(res=>setList(res.data.list))
    }
useEffect(()=>{
    getList()
},[])

  return (
    <>
    <div class="flex">
    {list ?
       list.map(ele=><Card info={ele} delete={deleteList}/>)
    : "loading"}
    </div>
   
   </>

  )
}

export default List