import React from 'react'
import { TextEditor } from '../../atoms'


const ModalNote = () => {
    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50 backdrop-blur flex md:items-center md:justify-center w-full md:p-14 overflow-x-hidden overflow-y-auto md:inset-0 h-full px-4 backdrop-brightness-110`}>
            <div className="md:p-0 md:w-[900px] w-[500px] p-5 my-10 md:h-full h-auto md:mt-0 bg-red-500 rounded-md top-0">
                <div className='flex justify-between w-full md:px-5 md:py-4'>
                    <div className='flex'>
                        <h3 className='font-bold text-lg flex'><span className=' font-normal text-sm mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                        </span>Judul Notes</h3>
                    </div>
                    <div>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 bg-white hover:text-gray-900 rounded-lg text-sm p-1.5" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
                <div className='px-5 mt-5'>
                    <div className='flex'>
                        <h3 className='font-bold text-lg flex'><span className=' font-normal text-sm mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                        </span>Judul Notes</h3>
                    </div>
                    <div className='w-1/2 px-10 mt-5'>
                        <form action="">
                            <div>
                                <TextEditor/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNote