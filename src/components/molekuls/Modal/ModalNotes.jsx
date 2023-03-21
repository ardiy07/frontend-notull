import React, { useState } from 'react'
import IMGFORM from '../../../assets/images/Hero-Image.png'

const ModalNotes = ({modalNotes}) => {
    const [modalNote, setModalNote] =  useState(true);
    const modal = (e) => {
        setModalNote(!modalNote);
    }

    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className={`${(modalNotes && modalNote) || (!modalNote && !modalNotes )? 'block' : 'hidden'} fixed top-0 left-0 right-0 z-50 backdrop-blur flex items-center justify-center w-full md:p-14 overflow-x-hidden overflow-y-auto md:inset-0 h-full px-4 backdrop-brightness-110`}>
            <div className="flex flex-col-reverse md:flex-row md:p-0 md:justify-between w-full p-5 md:h-full h-auto justify-center items-center mt-80 md:mt-0">
                {/* Modal content */}
                <div className='bg-[#ffffff] w-full h-full rounded-b-lg md:rounded-l-lg md:rounded-br-none flex justify-center items-center'>
                    <div className='w-[400px]'>
                        <div className="px-6 py-6 lg:px-2">
                            <h3 className="mb-2 text-xl font-bold text-gray-900 ">Buat Papan Catatan</h3>
                            <p className='text-gray-400'>Catat semua hal dengan Notull, untuk meningkatkan produktivitasmu secara individu maupun tim.</p>
                            <form className="space-y-6 md:mt-10 mt-5" action="#">
                                <div>
                                    <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Papan Catatan</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nama Papan Catatan" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi <span className='text-slate-400 font-normal'>(opsional)</span></label>
                                    <textarea className="peer block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 " rows={3} placeholder='Deskripsi' />

                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Buat Notes</button>
                            </form>
                        </div>

                    </div>

                </div>
                {/* Image Modal */}
                <div className='md:bg-gradient-to-l bg-gradient-to-b from-blue-300 to-white w-full  h-full rounded-t-lg md:rounded-tl-none  md:rounded-r-lg flex flex-col'>
                    <div className='w-full flex justify-end p-2'>
                        <button type="button" onClick={modal} className="text-gray-400 bg-transparent hover:bg-gray-200 bg-white hover:text-gray-900 rounded-lg text-sm p-1.5" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className='flex justify-center items-center h-full p-4 md:p-0'>
                        <img src={IMGFORM} alt='' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalNotes