import Image from "next/image"


function Header() {
  return (
    // left navbar
    <div className='shadow-sm bg-white sticky top-0 z-50  '>
      <div className='flex items-center justify-between mx-10  xl:mx-auto max-w-5xl '>
        <div className='relative hidden sm:inline-grid w-24 h-12 cursor-pointer '>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt='instagram logo'
            layout='fill'
            objectFit='contain'

          />
        </div>
        <div className='relative w-12 h-12 sm:hidden flex-shrink-0'>
          <Image
            src="data:image/png;base64,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"
            alt='instagram logo'
            layout='fill'
            objectFit='contain'
          />
        </div>



        {/* searching */}
        <div>
          <input type="text" placeholder='searching...' className='h-6 w-40 border-4 bg-slate-100 ring-2 rounded-sm text-sm' />

        </div>

        {/* right navbar */}
        <div className='flex gap-2 justify-end items-center -space-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="h-7 w-7 md:hidden cursor-pointer">
            <path fill-rule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>

          <div className='relative btn'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className=" btn -rotate-45">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            <div className='absolute btn -top-2 left-4 rounded-full bg-slate-600 text-slate-50 w-4 h-4 flex items-center justify-center text-xs animate-pulse'>3</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="btn">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="btn">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="btn">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="btn">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </div  >


      </div>
    </div>
  )
}
export default Header

