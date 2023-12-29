import React from 'react'
export default function Story(props){
  return(
    <div>
      <img src={props.img} alt="#" className='w-14 h-14 rounded-full ring-slate-400 hover:scale-90 transition transform duration-200 ease-out ' />
      <p className='text-sm text-center w-14 truncate'>{props.username}</p>
    </div>
  )
}