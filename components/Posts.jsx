
import React from 'react'

function Posts({ id, userName, userImage, userPic, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm' >
      {/* header */}

      <div className='flex items-center p-2  '>
        <img src={userImage} className='w-12 h-12 border rounded-sm  mr-1 bg-yellow-200' alt="#" />
        <p className='font-bold flex-1'>{userName}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 cursor-pointer' viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
      </div>
      {/*image post  */}

      <img src={userPic} className='object-cover w-full' alt="#" />

      {/* button  */}
      <div className='flex p-1 justify-between'>
        <div className='flex space-x-1 '>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 button" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 button" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 button rotate-45 " viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 button" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </div>

      {/* commmenet  */}



      {/* caption */}
      <div className='mt-1 p-3 truncate '>
    <p className='font-bold'>3 likes</p>
    <span className='font-bold mr-2'>{userName}</span> {caption}
      </div>
      {/* input bux */}
      


    <div className='flex justify-between items-center p-2 space-x-1'>
    <svg xmlns="http://www.w3.org/2000/svg"className='h-5 w-5  'fill='' viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    <input type="text" className='flex-1 border-none focus:ring-0 outline-none' placeholder='add a comment...'   />
    <button type="submit" className='font-semibold text-blue-400'>post</button>

    </div>
    </div>
  )
}

export default Posts