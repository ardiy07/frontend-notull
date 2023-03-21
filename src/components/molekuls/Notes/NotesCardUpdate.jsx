import React from 'react'
import { CardNote } from '../../atoms';

const NotesCardHead = () => {
    return (
        <div className='my-6'>
            <h4 className='font-bold text-lg md:text-2xl'><span className='font-normal'>Logo </span> Baru Update</h4>
            <div className='overflow-x-scroll'>
                <div className='grid mt-4 gap-4 grid-flow-col auto-cols-max mb-5 w-auto'>
                    <CardNote />
                    <CardNote />
                    <CardNote />
                    <CardNote />
                    <CardNote />
                    <CardNote />
                    <CardNote />
                </div>
            </div>
        </div>
    )
}

export default NotesCardHead