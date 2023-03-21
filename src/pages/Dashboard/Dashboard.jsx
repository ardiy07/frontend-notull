import React, { useState } from 'react'
import { ModalNotes, NavigationDash, NotesCardUpdate, NotesCardWork, Sidebar } from '../../components'

const Dashboard = () => {
  return (
    <>
      <div className='h-screen overflow-y-hidden flex'>
        <Sidebar />
        <div className='flex flex-col w-screen overflow-hidden'>
          <div className='bg-red-500 '>
            <NavigationDash />
          </div>
          <div className='overflow-scroll md:px-10 px-5 py-5 '>
            <div className='flex flex-col md:h-screen h-auto'>
              <NotesCardUpdate />
              <NotesCardWork />
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-auto bg-blue-500 flex justify-center items-center'>
      </div>
    </>
  )
}

export default Dashboard