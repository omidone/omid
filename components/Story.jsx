import Image from 'next/image'
import React from 'react'

export default function Story(props) {
  return (
    <div>
        <img src={props.img} alt="#" className='w-14 h-14 rounded-full ring-1 p-1 ' />
        <p className=''>{props.username}</p>
    </div>
  )
}
