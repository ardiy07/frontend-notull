import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useTask } from '../../../hooks/useTaks';
import CardNotul from './CardNotul'

const status = {
    todolist: {
        color: 'bg-blue-500',
        title: 'Todo List'
    },
    ongoing: {
        color: 'bg-orange-500',
        title: 'On Going'
    },
    review: {
        color: 'bg-yellow-300',
        title: 'Review'
    },
    completed: {
        color: 'bg-green-400',
        title: 'Completed'
    },
};

const CardBody = ({ statusType }) => {
    const [input, setInput] = useState(false);
    const [create, setCreate] = useState(true);
    const FungIn = (e) => {
        e.preventDefault();
        setInput(true);
        setCreate(false);
    };

    const FungOut = (e) => {
        e.preventDefault();
        setCreate(true);
        setInput(false);
    };

    const { state } = useTask();
    const tasks = state[statusType];

    return (
        <div className='md:w-[20rem] w-[15rem] h-min shadow-md rounded-md bg-[#ebecf0] md:p-4 py-4 px-3'>
            <div className='mb-3 flex justify-between items-center'>
                <h2 className='font-bold text-xl'>{status[statusType].title}</h2>
                <p className={`${status[statusType].color} w-4 h-4 rounded-full`}></p>
            </div>

            {/* Card */}
            <div className={`overflow-y-scroll ${input ? 'md:max-h-[19rem] max-h-[14rem]' : 'md:max-h-[27rem] max-h-[23rem]'} `}>
                <Droppable droppableId={statusType}>
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className='min-h-[1rem]'>
                            {tasks.map((task, index) => {
                                return (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div {...provided.draggableProps} ref={provided.innerRef} className={`mb-2  ${snapshot.isDropAnimating ? "opacity-0" : snapshot.draggingOver === "delete" && "opacity-80"
                                                    }`}>

                                                    <CardNotul status={statusType} title={task.title} {...provided.dragHandleProps} />
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </div>
            {/* Input Text */}
            <div className={`${input ? 'block mt-5' : 'hidden'}`}>
                <form className='my-0'>
                    <div className="flex justify-center bg-white rounded-md shadow-md">
                        <div className="relative mb-3 xl:w-80" data-te-input-wrapper-init>
                            <textarea className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 " rows={3} placeholder='Masukan Catatan' />
                        </div>
                    </div>
                    <div className='mt-3 flex items-center'>
                        <div>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tambah</button>
                        </div>
                        <div className='px-3 hover:cursor-pointer hover:duration-500 hover:rotate-180 hover:rounded-full' onClick={FungOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </form>
            </div>

            {/* Buton Add */}
            <div className={`${create ? 'block' : 'hidden'} hover:shadow-md mt-3 hover:bg-slate-300 flex px-4 py-1 hover:cursor-pointer rounded-md`} onClick={FungIn}>
                <span className='border bg-transparent border-black rounded-full w-6 h-6 flex justify-center items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </span>
                <p className='px-2'>Tambah Catatan</p>
            </div>
        </div>
    )
}

export default CardBody