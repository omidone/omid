'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Button() {
    const router = useRouter()
    const Navigation = (page) => {
        router.push(page) 
    }
  return (
    <section >
        <button  className='btn' onClick={()=>Navigation('/about/profile')}>profile</button>
    </section>
  )
}

export default Button