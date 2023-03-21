import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate();
    return (
        <section id='getstarted' className=' bg-gradient-to-l from-[#FEE6F7]  to-[#FFE15D] md:h-52 flex justify-center items-center '>
            <div className='container mx-auto my-5'>
                <div className='flex justify-center items-center'>
                    <h2 className='h2 mb-6 xl:mb-3 font-bold md:text-2xl'>Get Started To Notull</h2>
                </div>
                <div className='flex justify-center items-center md:my-2'>
                    <button onClick={() => navigate('/auth/register')} className='font-bold bg-[#FFB100] text-white md:text-lg rounded-lg text-sm px-16 px-15 py-3 text-center mr-3 md:mr-0 hover:bg-[#FFE15D] hover:shadow-xl tracking-wide leading-7'>Sign Up To Notull</button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted