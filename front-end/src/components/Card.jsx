import React from 'react'

function Card(props) {
  return (
    <div class=" flex border-2 border-black w-full h-30">
<div class=" max-w-md shadow-lg overflow-hidden w-92 h-92">
<img src={`https://image.tmdb.org/t/p/original/${props.info.poster}`} width="250" height="250" style={{backgroundSize: 'cover'}}/>
    </div>
    <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-2xl">
            {props.info.filmName}
        </h1>
        <div class="flex item-center justify-between mt-3">
            <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={()=>props.delete(props.info._id.valueOf())}>
                Delete
            </button>
        </div>
    </div>
</div>
  )
}

export default Card;