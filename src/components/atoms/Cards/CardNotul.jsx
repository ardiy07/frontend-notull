import React from 'react'

const CardNotul = ({ title, ...dragHandleProps }) => {
  return (
    <div {...dragHandleProps} className='bg-white shadow-md px-4 py-3 hover:cursor-grabbing rounded-md mb-3 notes-style hover:shadow-lg'>
      <div className='flex justify-between mb-1'>
        <p className='font-normal '>{title}</p>
        <span className='hover:cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </span>
      </div>
      <span className='mt-3 hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>
      </span>
    </div>
  )
}

export default CardNotul