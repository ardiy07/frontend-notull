import React from 'react'
import { Boards, ModalNote, NavigationDash, Sidebar } from '../../components'
import Drags from '../../components/coba/Drags'
import { TaskProvider } from '../../hooks/useTaks'

const Notes = () => {
    return (
        <>
            <div className='h-screen overflow-y-hidden flex'>
                <Sidebar />
                <div className='flex flex-col w-screen overflow-hidden'>
                    <div className='bg-cyan-800 shadow-md'>
                        <NavigationDash />
                    </div>
                    <div className='md:px-10 bg-slate-50 h-screen w-auto overflow-x-scroll overflow-y-hidden px-5 py-5'>
                        <div className='grid auto-rows-max grid-flow-col gap-4 md:w-auto'> 
                            <TaskProvider>
                                <Boards />
                            </TaskProvider>
                            {/* <ModalNote/> */} 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes